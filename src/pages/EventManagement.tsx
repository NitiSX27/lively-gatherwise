import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventManagementForm from '../components/EventManagementForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { 
  Zap, 
  Clock, 
  Users, 
  FileText, 
  AlertTriangle 
} from 'lucide-react';

type FormData = {
  eventName: string;
  prTasks: string;
  techTasks: string;
  logisticsTasks: string;
  creativesTasks: string;
};

type AIGeneratedTask = {
  description: string;
  complexity: 'Low' | 'Medium' | 'High';
  estimatedTime: string;
  assignedTo?: string;
};

const EventManagement = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [aiGeneratedTasks, setAIGeneratedTasks] = useState<{
    pr?: AIGeneratedTask[];
    tech?: AIGeneratedTask[];
    logistics?: AIGeneratedTask[];
    creatives?: AIGeneratedTask[];
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState("pr");

  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const genAI = GEMINI_API_KEY 
    ? new GoogleGenerativeAI(GEMINI_API_KEY) 
    : null;

  // Helper function to manually extract tasks if JSON parsing fails
  const extractTasksManually = (response: string): AIGeneratedTask[] => {
    const taskDescriptions = response.split('\n')
      .filter(line => 
        line.trim().length > 0 && 
        !line.includes('```') && 
        !line.toLowerCase().includes('json')
      )
      .slice(0, 5); // Limit to 5 tasks

    return taskDescriptions.map(desc => ({
      description: desc.replace(/^[-*]?\s*/, '').trim(),
      complexity: 'Medium',
      estimatedTime: '1-2 hours',
      assignedTo: 'Team'
    }));
  };

  const generateAITasks = async (teamType: string, existingTasks: string) => {
    try {
      setIsLoading(true);
      setError(null);

      if (!genAI) {
        throw new Error('Gemini API Key is missing');
      }

      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const prompt = `You are an expert event management AI assistant. Generate a comprehensive list of tasks for the ${teamType} team for an event named "${formData?.eventName}".

Existing tasks: ${existingTasks}

For each task, provide a detailed JSON object with the following structure:
{
  "description": "Specific, actionable task description",
  "complexity": "Low" | "Medium" | "High",
  "estimatedTime": "Time required to complete the task (e.g., '2 hours', '1 day')",
  "assignedTo": "Optional suggested team role or department"
}

Generate 3-5 additional tasks that complement the existing tasks and ensure event success. Focus on practicality, efficiency, and thorough event preparation.`;

      const result = await model.generateContent(prompt);
      const response = await result.response.text();

      // Extract JSON from code block or parse directly
      const jsonMatch = response.match(/```json\n([\s\S]*?)\n```|(\[.*\])/);
      let generatedTasks: AIGeneratedTask[] = [];

      if (jsonMatch) {
        const jsonString = jsonMatch[1] || jsonMatch[2];
        try {
          generatedTasks = JSON.parse(jsonString);
        } catch (parseError) {
          console.error('JSON Parsing Error:', parseError);
          // Fallback parsing
          generatedTasks = extractTasksManually(response);
        }
      } else {
        // Fallback parsing if no JSON found
        generatedTasks = extractTasksManually(response);
      }

      // Validate and clean tasks
      const validatedTasks = generatedTasks.map(task => ({
        description: task.description || 'Unspecified task',
        complexity: task.complexity || 'Medium',
        estimatedTime: task.estimatedTime || '1-2 hours',
        assignedTo: task.assignedTo || `${teamType.charAt(0).toUpperCase() + teamType.slice(1)} Team`
      })).filter(task => task.description);

      setAIGeneratedTasks((prev) => ({
        ...prev,
        [teamType]: validatedTasks,
      }));

    } catch (error) {
      console.error(`Error generating tasks for ${teamType}:`, error);
      setError(`Failed to generate tasks for ${teamType}. ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setFormData(data);

    // Automatically generate AI tasks for each team
    generateAITasks('pr', data.prTasks);
    generateAITasks('tech', data.techTasks);
    generateAITasks('logistics', data.logisticsTasks);
    generateAITasks('creatives', data.creativesTasks);
  };

  // Render tasks for a specific team
  const renderTeamTasks = (teamType: keyof typeof aiGeneratedTasks) => {
    const tasks = aiGeneratedTasks[teamType] || [];

    return (
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <Card key={index} className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 text-primary" size={20} />
                {task.complexity} Priority Task
              </CardTitle>
              <CardDescription>
                <Clock className="inline-block mr-2" size={16} />
                Estimated Time: {task.estimatedTime}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{task.description}</p>
              {task.assignedTo && (
                <div className="mt-2 flex items-center">
                  <Users className="mr-2" size={16} />
                  <span>Assigned to: {task.assignedTo}</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  if (!GEMINI_API_KEY) {
    return (
      <div className="container mx-auto p-6 text-center text-red-500">
        <h1>Configuration Error</h1>
        <p>Gemini API Key is missing. Please check your .env file.</p>
        <p>Ensure you have VITE_GEMINI_API_KEY set correctly.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4">
              Team Management
            </span>
            <h1 className="text-4xl font-bold mb-4">Event Management Dashboard</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Streamline planning with role-based dashboards for your entire team
            </p>
          </div>

          {/* Error Display */}
          {error && (
            <div className="max-w-4xl mx-auto mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <div className="flex items-center">
                <AlertTriangle className="mr-2" size={24} />
                <strong className="font-bold mr-2">Error: </strong>
                <span>{error}</span>
              </div>
            </div>
          )}

          {/* Admin Form */}
          <EventManagementForm onSubmit={onSubmit} isLoading={isLoading} />

          {/* Tasks Display Section */}
          {Object.keys(aiGeneratedTasks).length > 0 && (
            <div className="max-w-4xl mx-auto mt-12">
              <Tabs 
                value={selectedTab} 
                onValueChange={setSelectedTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="pr">
                    <FileText className="mr-2" /> PR
                  </TabsTrigger>
                  <TabsTrigger value="tech">
                    <Zap className="mr-2" /> Tech
                  </TabsTrigger>
                  <TabsTrigger value="logistics">
                    <Users className="mr-2" /> Logistics
                  </TabsTrigger>
                  <TabsTrigger value="creatives">
                    <Clock className="mr-2" /> Creatives
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="pr">
                  {renderTeamTasks('pr')}
                </TabsContent>
                <TabsContent value="tech">
                  {renderTeamTasks('tech')}
                </TabsContent>
                <TabsContent value="logistics">
                  {renderTeamTasks('logistics')}
                </TabsContent>
                <TabsContent value="creatives">
                  {renderTeamTasks('creatives')}
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventManagement;