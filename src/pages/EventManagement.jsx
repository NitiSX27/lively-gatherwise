
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ClipboardList, Clock, AlertCircle, Users, UserCheck, BadgeCheck, Palette } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const EventManagement = () => {
  const [activeTab, setActiveTab] = useState("pr");
  
  const tasks = {
    pr: [
      { id: 1, title: "Draft press release", status: "completed", dueDate: "2023-05-15", assignee: "Alex K." },
      { id: 2, title: "Create social media schedule", status: "in-progress", dueDate: "2023-05-18", assignee: "Jordan T." },
      { id: 3, title: "Design promotional graphics", status: "to-do", dueDate: "2023-05-20", assignee: "Taylor R." },
      { id: 4, title: "Schedule influencer outreach", status: "to-do", dueDate: "2023-05-22", assignee: "Morgan P." },
    ],
    tech: [
      { id: 1, title: "Set up event website", status: "completed", dueDate: "2023-05-10", assignee: "Jamie L." },
      { id: 2, title: "Configure live streaming", status: "in-progress", dueDate: "2023-05-20", assignee: "Riley S." },
      { id: 3, title: "Test audio equipment", status: "to-do", dueDate: "2023-05-25", assignee: "Casey O." },
      { id: 4, title: "Prepare presentation system", status: "to-do", dueDate: "2023-05-28", assignee: "Avery M." },
    ],
    logistics: [
      { id: 1, title: "Book venue", status: "completed", dueDate: "2023-04-30", assignee: "Quinn J." },
      { id: 2, title: "Arrange catering", status: "completed", dueDate: "2023-05-10", assignee: "Sam N." },
      { id: 3, title: "Schedule transportation", status: "in-progress", dueDate: "2023-05-22", assignee: "Jordan T." },
      { id: 4, title: "Confirm security arrangements", status: "to-do", dueDate: "2023-05-24", assignee: "Taylor R." },
    ],
    creative: [
      { id: 1, title: "Design event logo", status: "completed", dueDate: "2023-05-05", assignee: "Morgan P." },
      { id: 2, title: "Create event brochure", status: "in-progress", dueDate: "2023-05-18", assignee: "Jamie L." },
      { id: 3, title: "Design stage backdrop", status: "in-progress", dueDate: "2023-05-20", assignee: "Riley S." },
      { id: 4, title: "Prepare video intros", status: "to-do", dueDate: "2023-05-25", assignee: "Casey O." },
    ],
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "to-do":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <BadgeCheck className="h-4 w-4 mr-1" />;
      case "in-progress":
        return <Clock className="h-4 w-4 mr-1" />;
      case "to-do":
        return <ClipboardList className="h-4 w-4 mr-1" />;
      default:
        return <AlertCircle className="h-4 w-4 mr-1" />;
    }
  };

  const getTabIcon = (tab) => {
    switch (tab) {
      case "pr":
        return <Users className="h-5 w-5" />;
      case "tech":
        return <span className="material-icons">computer</span>;
      case "logistics":
        return <span className="material-icons">map</span>;
      case "creative":
        return <Palette className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const renderDashboard = (role) => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tasks Card */}
        <Card className="glass-card card-3d-effect lg:col-span-2">
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
            <CardDescription>Track and manage your {role} tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks[role].map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                  <div className="flex items-start flex-col">
                    <div className="font-medium">{task.title}</div>
                    <div className="text-sm text-muted-foreground flex items-center mt-1">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      Due: {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                        {task.assignee.split(' ')[0][0]}{task.assignee.split(' ')[1]?.[0] || ''}
                      </span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center ${getStatusColor(task.status)}`}>
                      {getStatusIcon(task.status)}
                      {task.status.replace('-', ' ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Role-specific Card */}
        <Card className="glass-card card-3d-effect">
          <CardHeader>
            <CardTitle>{role.charAt(0).toUpperCase() + role.slice(1)} Dashboard</CardTitle>
            <CardDescription>Quick tools and insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {role === "pr" && (
                <>
                  <div className="p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                    <div className="font-medium">Social Media Performance</div>
                    <div className="mt-2 flex justify-between">
                      <Badge variant="outline" className="bg-primary/10 text-primary flex gap-1">
                        <UserCheck className="h-3.5 w-3.5" />
                        120 Responses
                      </Badge>
                      <Badge variant="outline" className="bg-accent/10 text-accent flex gap-1">
                        +15% from last event
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                    <div className="font-medium">Press Kit</div>
                    <div className="mt-2">
                      <a href="#" className="text-primary text-sm flex items-center">
                        Download Press Release Template
                      </a>
                    </div>
                  </div>
                </>
              )}

              {role === "tech" && (
                <>
                  <div className="p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                    <div className="font-medium">System Status</div>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        Website: Online
                      </Badge>
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        Audio: Ready
                      </Badge>
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                        Stream: Setup
                      </Badge>
                      <Badge variant="outline" className="bg-gray-100 text-gray-800">
                        Backups: Pending
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                    <div className="font-medium">Technical Documentation</div>
                    <div className="mt-2">
                      <a href="#" className="text-primary text-sm flex items-center">
                        View Equipment Checklist
                      </a>
                    </div>
                  </div>
                </>
              )}

              {role === "logistics" && (
                <>
                  <div className="p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                    <div className="font-medium">Venue Information</div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      <p>Student Center, Room 301</p>
                      <p>Capacity: 250 people</p>
                      <a href="#" className="text-primary text-sm mt-2 block">
                        View Floor Plan
                      </a>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                    <div className="font-medium">Event Timeline</div>
                    <div className="mt-2 text-sm space-y-2">
                      <div className="flex justify-between">
                        <span>Setup</span>
                        <span>2:00 PM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Doors Open</span>
                        <span>5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Event Start</span>
                        <span>6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {role === "creative" && (
                <>
                  <div className="p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                    <div className="font-medium">Brand Assets</div>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      <div className="aspect-square bg-primary/20 rounded-md"></div>
                      <div className="aspect-square bg-accent/20 rounded-md"></div>
                      <div className="aspect-square bg-secondary/20 rounded-md"></div>
                    </div>
                    <a href="#" className="text-primary text-sm mt-2 block">
                      View All Assets
                    </a>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                    <div className="font-medium">Design Requests</div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      <p>3 pending requests</p>
                      <a href="#" className="text-primary text-sm mt-1 block">
                        Review Requests
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
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
              Team Collaboration
            </span>
            <h1 className="text-4xl font-bold mb-4">Event Management Hub</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Streamline your event planning with role-based dashboards and collaborative tools
            </p>
          </div>

          <Tabs defaultValue="pr" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-md">
                <TabsTrigger value="pr" className="flex flex-col items-center py-3">
                  <Users className="h-5 w-5 mb-1" />
                  <span>PR</span>
                </TabsTrigger>
                <TabsTrigger value="tech" className="flex flex-col items-center py-3">
                  <span className="material-icons mb-1">computer</span>
                  <span>Tech</span>
                </TabsTrigger>
                <TabsTrigger value="logistics" className="flex flex-col items-center py-3">
                  <span className="material-icons mb-1">map</span>
                  <span>Logistics</span>
                </TabsTrigger>
                <TabsTrigger value="creative" className="flex flex-col items-center py-3">
                  <Palette className="h-5 w-5 mb-1" />
                  <span>Creative</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="pr">
              {renderDashboard("pr")}
            </TabsContent>
            <TabsContent value="tech">
              {renderDashboard("tech")}
            </TabsContent>
            <TabsContent value="logistics">
              {renderDashboard("logistics")}
            </TabsContent>
            <TabsContent value="creative">
              {renderDashboard("creative")}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventManagement;
