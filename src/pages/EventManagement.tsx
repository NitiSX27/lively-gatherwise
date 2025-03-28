import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventManagementForm from '../components/EventManagementForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEventContext, EventAnalysis } from '../context/EventContext';
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

  const { 
    updateEventAnalysis, 
    updateSentimentAnalysis, 
    updateContentSuggestions,
    updateSponsorSuggestions,
    updateEventName,
    updateEventType
  } = useEventContext();

  const generateAITasks = async (teamType: string, existingTasks: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log(`Generating tasks for ${teamType} team with existing tasks: ${existingTasks}`);
      
      // Generate mock tasks based on team type
      const mockTasks: AIGeneratedTask[] = [];
      
      if (teamType === 'pr') {
        mockTasks.push(
          {
            description: "Create press release for " + formData?.eventName,
            complexity: "High",
            estimatedTime: "4-6 hours",
            assignedTo: "PR Lead"
          },
          {
            description: "Design social media campaign assets",
            complexity: "Medium",
            estimatedTime: "2-3 days",
            assignedTo: "Social Media Team"
          },
          {
            description: "Schedule media interviews",
            complexity: "Medium",
            estimatedTime: "1 week",
            assignedTo: "Media Relations"
          }
        );
      } else if (teamType === 'tech') {
        mockTasks.push(
          {
            description: "Set up event registration system",
            complexity: "High",
            estimatedTime: "2 days",
            assignedTo: "Web Developer"
          },
          {
            description: "Configure audio/visual equipment",
            complexity: "Medium",
            estimatedTime: "1 day",
            assignedTo: "AV Technician"
          },
          {
            description: "Create event app for attendees",
            complexity: "High",
            estimatedTime: "1 week",
            assignedTo: "Mobile Developer"
          }
        );
      } else if (teamType === 'logistics') {
        mockTasks.push(
          {
            description: "Book venue for " + formData?.eventName,
            complexity: "High",
            estimatedTime: "1 week",
            assignedTo: "Logistics Lead"
          },
          {
            description: "Arrange catering services",
            complexity: "Medium",
            estimatedTime: "3 days",
            assignedTo: "Catering Coordinator"
          },
          {
            description: "Organize transportation for speakers",
            complexity: "Low",
            estimatedTime: "1 day",
            assignedTo: "Transportation Team"
          }
        );
      } else if (teamType === 'creatives') {
        mockTasks.push(
          {
            description: "Design event logo and branding",
            complexity: "High",
            estimatedTime: "3 days",
            assignedTo: "Graphic Designer"
          },
          {
            description: "Create promotional videos",
            complexity: "Medium",
            estimatedTime: "1 week",
            assignedTo: "Video Producer"
          },
          {
            description: "Design event signage and banners",
            complexity: "Low",
            estimatedTime: "2 days",
            assignedTo: "Design Team"
          }
        );
      }
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setAIGeneratedTasks(prev => ({
        ...prev,
        [teamType]: mockTasks,
      }));
    } catch (error) {
      console.error(`Error generating tasks for ${teamType}:`, error);
      setError(`Failed to generate tasks for ${teamType}. ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const generateContentSuggestions = (eventName: string, tasks: string) => {
    // Generate content suggestions based on event details
    const suggestions = [
      {
        id: 1,
        title: `${eventName} Announcement`,
        type: "Press Release",
        score: 95,
        description: `Official announcement of ${eventName} with key details and highlights.`
      },
      {
        id: 2,
        title: `${eventName} Countdown`,
        type: "Social Media Campaign",
        score: 88,
        description: "Build anticipation with a countdown series showcasing speakers, activities, and exclusive content."
      },
      {
        id: 3,
        title: "Behind the Scenes",
        type: "Video Series",
        score: 85,
        description: `Showcase the planning and preparation process for ${eventName}.`
      },
      {
        id: 4,
        title: "Attendee Guide",
        type: "Infographic",
        score: 82,
        description: `Essential information and tips for attendees of ${eventName}.`
      }
    ];
    
    return suggestions;
  };

  const generateSponsorSuggestions = (eventName: string, eventType: string) => {
    // Determine event category based on tasks and event name
    const isEducation = eventName.toLowerCase().includes('education') || 
                        eventName.toLowerCase().includes('academic') || 
                        eventName.toLowerCase().includes('student');
    
    const isTech = eventName.toLowerCase().includes('tech') || 
                  eventName.toLowerCase().includes('digital') || 
                  eventName.toLowerCase().includes('innovation');
    
    const isEco = eventName.toLowerCase().includes('green') || 
                 eventName.toLowerCase().includes('sustainable') || 
                 eventName.toLowerCase().includes('eco');
    
    const isMusic = eventName.toLowerCase().includes('music') || 
                    eventName.toLowerCase().includes('concert') || 
                    eventName.toLowerCase().includes('festival');

    // Generate sponsor suggestions based on event type
    const sponsors = [];
    
    if (isEducation) {
      sponsors.push(
        {
          name: "EduTech Solutions",
          match: "High match - education events",
          logo: "ET",
          color: "bg-blue-500",
          description: "Leading provider of educational technology and learning platforms.",
          industry: "Education Technology"
        },
        {
          name: "Student Success Foundation",
          match: "Perfect match - student services",
          logo: "SF",
          color: "bg-green-600",
          description: "Non-profit dedicated to student achievement and educational equity.",
          industry: "Education Non-profit"
        }
      );
    }
    
    if (isTech) {
      sponsors.push(
        {
          name: "Innovative Systems Inc.",
          match: "High match - tech events",
          logo: "IS",
          color: "bg-purple-600",
          description: "Leading provider of innovative technology solutions for businesses.",
          industry: "Information Technology"
        },
        {
          name: "NextGen Development",
          match: "Perfect match - innovation",
          logo: "ND",
          color: "bg-blue-800",
          description: "Cutting-edge software development firm specializing in emerging technologies.",
          industry: "Software Development"
        }
      );
    }
    
    if (isEco) {
      sponsors.push(
        {
          name: "EcoFriendly Solutions",
          match: "High match - sustainability events",
          logo: "ES",
          color: "bg-green-500",
          description: "Provider of sustainable products and services for environmentally conscious organizations.",
          industry: "Sustainability"
        },
        {
          name: "GreenFuture Initiative",
          match: "Perfect match - eco-friendly events",
          logo: "GF",
          color: "bg-emerald-600",
          description: "Non-profit dedicated to promoting sustainable practices and environmental awareness.",
          industry: "Environmental Non-profit"
        }
      );
    }
    
    if (isMusic) {
      sponsors.push(
        {
          name: "SoundWave Audio",
          match: "High match - music events",
          logo: "SA",
          color: "bg-indigo-600",
          description: "Premium audio equipment provider for concerts and music events.",
          industry: "Audio Equipment"
        },
        {
          name: "MelodyStream",
          match: "Perfect match - music festivals",
          logo: "MS",
          color: "bg-pink-600",
          description: "Leading music streaming service with millions of active users.",
          industry: "Music Streaming"
        }
      );
    }
    
    // Add some general sponsors if we don't have enough
    if (sponsors.length < 2) {
      sponsors.push(
        {
          name: "Universal Promotions",
          match: "Good match - event services",
          logo: "UP",
          color: "bg-blue-500",
          description: "Full-service event promotion and marketing agency.",
          industry: "Event Marketing"
        },
        {
          name: "Community Partnerships",
          match: "Good match - local events",
          logo: "CP",
          color: "bg-orange-500",
          description: "Organization connecting businesses with community events and initiatives.",
          industry: "Community Development"
        }
      );
    }
    
    return sponsors;
  };

  const generateSentimentAnalysis = (eventName: string) => {
    // Generate random sentiment values that sum to 100
    const positive = Math.floor(Math.random() * 40) + 45; // 45-85%
    const remaining = 100 - positive;
    const neutral = Math.floor(Math.random() * remaining);
    const negative = remaining - neutral;
    
    return {
      positive,
      neutral,
      negative
    };
  };

  const analyzeEventWithAI = async (data: FormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      console.log('Analyzing event with mock data');
      
      // Store event name and determine event type
      updateEventName(data.eventName);
      
      let eventType = 'General';
      if (data.prTasks.toLowerCase().includes('tech') || data.techTasks.toLowerCase().includes('software')) {
        eventType = 'Technology';
      } else if (data.prTasks.toLowerCase().includes('music') || data.prTasks.toLowerCase().includes('concert')) {
        eventType = 'Music';
      } else if (data.prTasks.toLowerCase().includes('education') || data.prTasks.toLowerCase().includes('school')) {
        eventType = 'Education';
      } else if (data.prTasks.toLowerCase().includes('eco') || data.prTasks.toLowerCase().includes('sustainable')) {
        eventType = 'Environmental';
      }
      
      updateEventType(eventType);
      
      // Generate mock analysis data
      const mockAnalysis: EventAnalysis = {
        prStrategies: [
          {
            strategy: `Social Media Campaign for ${data.eventName}`,
            impact: "High",
            timeline: "2-3 weeks",
            expectedOutcome: "Increased awareness and engagement across target demographics"
          },
          {
            strategy: "Press Release Distribution",
            impact: "Medium",
            timeline: "1 week",
            expectedOutcome: "Media coverage in local and industry publications"
          }
        ],
        marketingInsights: [
          {
            insight: "Target audience demographic analysis",
            recommendation: "Focus promotion on platforms popular with 18-34 age group",
            priority: "High"
          },
          {
            insight: "Previous similar events showed high engagement with visual content",
            recommendation: "Create short-form video teasers for social media",
            priority: "Medium"
          }
        ],
        audienceMetrics: {
          expectedReach: 5000,
          targetDemographic: ["Students", "Young professionals", "Tech enthusiasts"],
          engagementPrediction: 75
        },
        timestamp: new Date().toISOString()
      };
      
      // Generate content suggestions based on event details
      const contentSuggestions = generateContentSuggestions(data.eventName, data.prTasks);
      updateContentSuggestions(contentSuggestions);
      
      // Generate sponsor suggestions based on event details
      const sponsorSuggestions = generateSponsorSuggestions(data.eventName, eventType);
      updateSponsorSuggestions(sponsorSuggestions);
      
      // Generate sentiment analysis
      const sentimentAnalysis = generateSentimentAnalysis(data.eventName);
      updateSentimentAnalysis(sentimentAnalysis);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      updateEventAnalysis(mockAnalysis);
    } catch (err) {
      setError(`Failed to analyze event with AI: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Form submitted:', data);
    setFormData(data);

    // Run the event analysis for context data
    analyzeEventWithAI(data);

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