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
          
          {/* Charts Section */}
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
            
            <TabsContent value="attendance">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="glass-card card-3d-effect lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Attendance Trends</CardTitle>
                    <CardDescription>Monthly attendance vs. venue capacity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={attendanceData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="attendance" stroke="#8884d8" activeDot={{ r: 8 }} name="Attendance" />
                          <Line type="monotone" dataKey="capacity" stroke="#82ca9d" strokeDasharray="3 3" name="Capacity" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle>Attendance Breakdown</CardTitle>
                    <CardDescription>By event type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-60">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={[
                              { name: 'Workshops', value: 40, color: '#8884d8' },
                              { name: 'Seminars', value: 25, color: '#82ca9d' },
                              { name: 'Social', value: 20, color: '#ffc658' },
                              { name: 'Career', value: 15, color: '#ff8042' },
                            ]}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {[
                              { name: 'Workshops', value: 40, color: '#8884d8' },
                              { name: 'Seminars', value: 25, color: '#82ca9d' },
                              { name: 'Social', value: 20, color: '#ffc658' },
                              { name: 'Career', value: 15, color: '#ff8042' },
                            ].map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="engagement">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="glass-card card-3d-effect lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Engagement Metrics</CardTitle>
                    <CardDescription>Participation rates across different event touchpoints</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={engagementData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="hour" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="inPerson" fill="#8884d8" name="In-Person" />
                          <Bar dataKey="online" fill="#82ca9d" name="Online" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle>Satisfaction Scores</CardTitle>
                    <CardDescription>Overall attendee satisfaction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-60">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={sentimentData}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={2}
                            dataKey="value"
                            label={({name, value}) => `${name}: ${value}%`}
                          >
                            {sentimentData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sentiment">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="glass-card card-3d-effect lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Major Distribution</CardTitle>
                    <CardDescription>Attendees by field of study</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          layout="vertical"
                          data={[
                            { name: 'Computer Science', value: 30 },
                            { name: 'Business', value: 25 },
                            { name: 'Engineering', value: 20 },
                            { name: 'Arts & Humanities', value: 15 },
                            { name: 'Health Sciences', value: 10 },
                          ]}
                          margin={{ top: 20, right: 30, left: 90, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" />
                          <YAxis dataKey="name" type="category" />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="value" fill="#8884d8" name="Percentage (%)" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle>Class Year</CardTitle>
                    <CardDescription>Attendees by academic year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-60">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={demographicData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({name, value}) => `${name}: ${value}%`}
                          >
                            {demographicData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
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
