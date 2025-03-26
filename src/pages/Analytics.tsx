
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  ChevronUp,
  ChevronDown,
  TrendingUp,
  BarChart4,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Calendar,
  Image,
  MessageSquare,
  ThumbsUp,
} from "lucide-react";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("attendance");
  
  // Sample attendance data
  const attendanceData = [
    { date: "Jan", attendance: 450, capacity: 500, registrations: 480 },
    { date: "Feb", attendance: 520, capacity: 600, registrations: 550 },
    { date: "Mar", attendance: 600, capacity: 650, registrations: 630 },
    { date: "Apr", attendance: 580, capacity: 650, registrations: 610 },
    { date: "May", attendance: 650, capacity: 700, registrations: 680 },
    { date: "Jun", attendance: 700, capacity: 750, registrations: 740 },
  ];
  
  // Sample engagement data
  const engagementData = [
    { hour: "10 AM", inPerson: 180, online: 120 },
    { hour: "11 AM", inPerson: 250, online: 180 },
    { hour: "12 PM", inPerson: 300, online: 220 },
    { hour: "1 PM", inPerson: 280, online: 240 },
    { hour: "2 PM", inPerson: 320, online: 200 },
    { hour: "3 PM", inPerson: 350, online: 230 },
    { hour: "4 PM", inPerson: 300, online: 180 },
    { hour: "5 PM", inPerson: 200, online: 150 },
  ];
  
  // Sample sentiment data
  const sentimentData = [
    { name: "Excellent", value: 42, color: "#22c55e" },
    { name: "Good", value: 28, color: "#84cc16" },
    { name: "Average", value: 18, color: "#facc15" },
    { name: "Fair", value: 8, color: "#f97316" },
    { name: "Poor", value: 4, color: "#ef4444" },
  ];
  
  // Sample demographic data
  const demographicData = [
    { name: "Freshmen", value: 25, color: "#3b82f6" },
    { name: "Sophomores", value: 20, color: "#8b5cf6" },
    { name: "Juniors", value: 22, color: "#ec4899" },
    { name: "Seniors", value: 18, color: "#f97316" },
    { name: "Grad Students", value: 15, color: "#14b8a6" },
  ];
  
  // Key stats
  const keyStats = [
    { 
      label: "Total Attendees", 
      value: 745, 
      change: 12, 
      isPositive: true, 
      icon: <Users className="h-5 w-5" /> 
    },
    { 
      label: "Engagement Rate", 
      value: "78%", 
      change: 5, 
      isPositive: true, 
      icon: <TrendingUp className="h-5 w-5" /> 
    },
    { 
      label: "Satisfaction Score", 
      value: "4.2/5", 
      change: 0.3, 
      isPositive: true, 
      icon: <ThumbsUp className="h-5 w-5" /> 
    },
    { 
      label: "Feedback Responses", 
      value: 318, 
      change: -2, 
      isPositive: false, 
      icon: <MessageSquare className="h-5 w-5" /> 
    },
  ];
  
  // Event highlights
  const eventHighlights = [
    { title: "Opening Keynote", type: "image", highlight: "Main Stage" },
    { title: "Workshop Session", type: "image", highlight: "Tech Room" },
    { title: "Networking Mixer", type: "image", highlight: "Lounge Area" },
    { title: "Closing Panel", type: "image", highlight: "Conference Hall" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4">
              Data Insights
            </span>
            <h1 className="text-4xl font-bold mb-4">Analytics Dashboard</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-time data visualization for attendance, engagement, and sentiment tracking
            </p>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {keyStats.map((stat, index) => (
              <Card key={index} className="glass-card card-3d-effect">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="rounded-full bg-primary/10 p-2">
                      {stat.icon}
                    </div>
                    <Badge 
                      variant={stat.isPositive ? "default" : "destructive"} 
                      className={`${stat.isPositive ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'} flex items-center`}
                    >
                      {stat.isPositive ? <ChevronUp className="h-3 w-3 mr-1" /> : <ChevronDown className="h-3 w-3 mr-1" />}
                      {stat.change}{typeof stat.change === 'number' && !stat.change.toString().includes('.') && '%'}
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-muted-foreground text-sm">{stat.label}</h3>
                    <div className="text-3xl font-bold mt-1">{stat.value}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Tabs for different analytics */}
          <Tabs defaultValue="attendance" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-2xl">
                <TabsTrigger value="attendance" className="py-3">
                  <BarChart4 className="h-4 w-4 mr-2" /> Attendance
                </TabsTrigger>
                <TabsTrigger value="engagement" className="py-3">
                  <LineChartIcon className="h-4 w-4 mr-2" /> Engagement
                </TabsTrigger>
                <TabsTrigger value="sentiment" className="py-3">
                  <PieChartIcon className="h-4 w-4 mr-2" /> Feedback
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Attendance Tab */}
            <TabsContent value="attendance" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="glass-card card-3d-effect lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Attendance Trends</CardTitle>
                    <CardDescription>Monthly event attendance vs capacity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={attendanceData}>
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="attendance" name="Attendance" fill="#3b82f6" />
                          <Bar dataKey="registrations" name="Registrations" fill="#8b5cf6" />
                          <Bar dataKey="capacity" name="Capacity" fill="#e2e8f0" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle>Attendee Demographics</CardTitle>
                    <CardDescription>Distribution by academic year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-60">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={demographicData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {demographicData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="text-center">
                        <div className="text-xl font-bold">62%</div>
                        <div className="text-xs text-muted-foreground">Undergrad</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold">15%</div>
                        <div className="text-xs text-muted-foreground">Grad</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold">23%</div>
                        <div className="text-xs text-muted-foreground">Other</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Engagement Tab */}
            <TabsContent value="engagement" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="glass-card card-3d-effect lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Hourly Engagement</CardTitle>
                    <CardDescription>In-person vs online participation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={engagementData}>
                          <XAxis dataKey="hour" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Area type="monotone" dataKey="inPerson" name="In-Person" stackId="1" stroke="#3b82f6" fill="#3b82f6" />
                          <Area type="monotone" dataKey="online" name="Online" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle>Session Popularity</CardTitle>
                    <CardDescription>Most attended event sessions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="space-y-1">
                        <div className="flex justify-between items-baseline">
                          <span className="font-medium">Keynote Speaker</span>
                          <span className="text-sm text-muted-foreground">92%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "92%" }}></div>
                        </div>
                      </li>
                      <li className="space-y-1">
                        <div className="flex justify-between items-baseline">
                          <span className="font-medium">Tech Workshop</span>
                          <span className="text-sm text-muted-foreground">78%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }}></div>
                        </div>
                      </li>
                      <li className="space-y-1">
                        <div className="flex justify-between items-baseline">
                          <span className="font-medium">Networking Mixer</span>
                          <span className="text-sm text-muted-foreground">64%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "64%" }}></div>
                        </div>
                      </li>
                      <li className="space-y-1">
                        <div className="flex justify-between items-baseline">
                          <span className="font-medium">Panel Discussion</span>
                          <span className="text-sm text-muted-foreground">58%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "58%" }}></div>
                        </div>
                      </li>
                      <li className="space-y-1">
                        <div className="flex justify-between items-baseline">
                          <span className="font-medium">Closing Ceremony</span>
                          <span className="text-sm text-muted-foreground">51%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "51%" }}></div>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Sentiment Tab */}
            <TabsContent value="sentiment" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle>Feedback Sentiment</CardTitle>
                    <CardDescription>Overall attendee ratings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-60">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={sentimentData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {sentimentData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="text-center">
                        <div className="text-xl font-bold">4.2</div>
                        <div className="text-xs text-muted-foreground">Avg. Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold">318</div>
                        <div className="text-xs text-muted-foreground">Responses</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold">70%</div>
                        <div className="text-xs text-muted-foreground">Positive</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-card card-3d-effect lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Feedback Comments</CardTitle>
                    <CardDescription>Recent attendee comments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-medium flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-2 text-green-500" />
                            Excellent Experience
                          </div>
                          <Badge className="bg-green-500/20 text-green-500">5/5</Badge>
                        </div>
                        <p className="text-sm">
                          "The keynote speaker was incredibly inspiring. I learned so much and made great connections during the networking session!"
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">- Computer Science Student</p>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-medium flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-2 text-green-500" />
                            Great Workshops
                          </div>
                          <Badge className="bg-green-500/20 text-green-500">4/5</Badge>
                        </div>
                        <p className="text-sm">
                          "The workshops were hands-on and practical. Would have liked more time for Q&A but overall very valuable."
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">- Engineering Major</p>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-medium flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-2 text-yellow-500" />
                            Good with Suggestions
                          </div>
                          <Badge className="bg-yellow-500/20 text-yellow-500">3/5</Badge>
                        </div>
                        <p className="text-sm">
                          "Content was good but venue was a bit crowded. Consider a larger space or capping attendance for next year."
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">- Business Student</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Event Highlights */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Event Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventHighlights.map((highlight, index) => (
                <Card key={index} className="glass-card card-3d-effect overflow-hidden">
                  <div className="aspect-video bg-gradient-to-tr from-primary/20 to-accent/10 flex items-center justify-center">
                    <Image className="h-8 w-8 text-primary/60" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.highlight}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;
