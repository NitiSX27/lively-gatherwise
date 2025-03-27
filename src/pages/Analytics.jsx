
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, BarChart, PieChart, Line, Bar, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { Users, TrendingUp, BarChart2, PieChart as PieChartIcon, Calendar, Clock, Award, ThumbsUp } from 'lucide-react';

const Analytics = () => {
  // Sample data for attendance chart
  const attendanceData = [
    { name: 'Jan', attendance: 450, capacity: 500 },
    { name: 'Feb', attendance: 480, capacity: 500 },
    { name: 'Mar', attendance: 490, capacity: 500 },
    { name: 'Apr', attendance: 520, capacity: 550 },
    { name: 'May', attendance: 530, capacity: 550 },
    { name: 'Jun', attendance: 610, capacity: 650 },
    { name: 'Jul', attendance: 580, capacity: 650 },
  ];

  // Sample data for engagement metrics
  const engagementData = [
    { name: 'Pre-Event Email', rate: 65 },
    { name: 'Event Check-in', rate: 92 },
    { name: 'Workshop Participation', rate: 78 },
    { name: 'Post-Event Survey', rate: 45 },
    { name: 'Social Media Interaction', rate: 58 },
  ];

  // Sample data for satisfaction scores
  const satisfactionData = [
    { name: 'Very Satisfied', value: 55, color: '#22c55e' },
    { name: 'Satisfied', value: 30, color: '#3b82f6' },
    { name: 'Neutral', value: 10, color: '#f59e0b' },
    { name: 'Unsatisfied', value: 5, color: '#ef4444' },
  ];

  // Sample data for demographics
  const demographicsData = [
    { name: 'Freshmen', value: 20, color: '#3b82f6' },
    { name: 'Sophomores', value: 25, color: '#22c55e' },
    { name: 'Juniors', value: 30, color: '#f59e0b' },
    { name: 'Seniors', value: 20, color: '#8b5cf6' },
    { name: 'Graduate', value: 5, color: '#ec4899' },
  ];

  // Sample event highlights
  const highlights = [
    {
      id: 1,
      title: "Tech Showcase",
      metrics: { attendance: 520, satisfaction: 92, engagement: 88 }
    },
    {
      id: 2,
      title: "Coding Workshop",
      metrics: { attendance: 180, satisfaction: 95, engagement: 90 }
    },
    {
      id: 3,
      title: "Career Fair",
      metrics: { attendance: 350, satisfaction: 88, engagement: 85 }
    }
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
              Track attendance, measure engagement, and analyze event performance
            </p>
          </div>

          {/* Key Metrics Section */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-card card-3d-effect">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Total Attendance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3,160</div>
                  <p className="text-sm text-muted-foreground flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                    <span className="text-green-500 font-medium">+12.5%</span> from last semester
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card card-3d-effect">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    Events Hosted
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">28</div>
                  <p className="text-sm text-muted-foreground flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                    <span className="text-green-500 font-medium">+8.3%</span> from last semester
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card card-3d-effect">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <ThumbsUp className="h-5 w-5 mr-2 text-primary" />
                    Satisfaction Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">92%</div>
                  <p className="text-sm text-muted-foreground flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                    <span className="text-green-500 font-medium">+3.2%</span> from last semester
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card card-3d-effect">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Avg. Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">76%</div>
                  <p className="text-sm text-muted-foreground flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                    <span className="text-green-500 font-medium">+5.8%</span> from last semester
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Charts Section */}
          <section className="mb-12">
            <Tabs defaultValue="attendance" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-3 w-full max-w-md">
                  <TabsTrigger value="attendance" className="flex items-center justify-center gap-2">
                    <BarChart2 className="h-4 w-4" />
                    <span>Attendance</span>
                  </TabsTrigger>
                  <TabsTrigger value="engagement" className="flex items-center justify-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <span>Engagement</span>
                  </TabsTrigger>
                  <TabsTrigger value="demographics" className="flex items-center justify-center gap-2">
                    <PieChartIcon className="h-4 w-4" />
                    <span>Demographics</span>
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
                            <XAxis dataKey="name" />
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
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="rate" fill="#8884d8" name="Engagement Rate (%)" />
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
                              data={satisfactionData}
                              cx="50%"
                              cy="50%"
                              innerRadius={40}
                              outerRadius={80}
                              fill="#8884d8"
                              paddingAngle={2}
                              dataKey="value"
                              label={({name, value}) => `${name}: ${value}%`}
                            >
                              {satisfactionData.map((entry, index) => (
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

              <TabsContent value="demographics">
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
                              data={demographicsData}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              label={({name, value}) => `${name}: ${value}%`}
                            >
                              {demographicsData.map((entry, index) => (
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
          </section>

          {/* Event Highlights */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Event Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((highlight) => (
                <Card key={highlight.id} className="glass-card card-3d-effect overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      {highlight.title}
                    </CardTitle>
                    <CardDescription>Key performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Attendance</span>
                        <span className="font-medium">{highlight.metrics.attendance}</span>
                      </div>
                      <div className="w-full bg-accent/10 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${(highlight.metrics.attendance / 600) * 100}%` }}></div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Satisfaction</span>
                        <span className="font-medium">{highlight.metrics.satisfaction}%</span>
                      </div>
                      <div className="w-full bg-accent/10 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${highlight.metrics.satisfaction}%` }}></div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Engagement</span>
                        <span className="font-medium">{highlight.metrics.engagement}%</span>
                      </div>
                      <div className="w-full bg-accent/10 rounded-full h-2.5">
                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${highlight.metrics.engagement}%` }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;
