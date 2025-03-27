
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CheckSquare, Clock, Users, FileText, Image } from 'lucide-react';

const EventManagement = () => {
  const [selectedTab, setSelectedTab] = useState("pr");
  
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
          
          <Tabs defaultValue="pr" className="w-full" onValueChange={setSelectedTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl">
                <TabsTrigger value="pr" className="py-3">PR Team</TabsTrigger>
                <TabsTrigger value="tech" className="py-3">Tech Team</TabsTrigger>
                <TabsTrigger value="logistics" className="py-3">Logistics</TabsTrigger>
                <TabsTrigger value="creatives" className="py-3">Creatives</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="pr" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-primary" />
                      Press Releases
                    </CardTitle>
                    <CardDescription>Manage your event press releases</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="p-2 rounded bg-background/60 flex justify-between">
                        <span>Event Announcement</span>
                        <span className="text-green-500">Published</span>
                      </li>
                      <li className="p-2 rounded bg-background/60 flex justify-between">
                        <span>Speaker Lineup</span>
                        <span className="text-amber-500">Draft</span>
                      </li>
                      <li className="p-2 rounded bg-background/60 flex justify-between">
                        <span>Sponsor Showcase</span>
                        <span className="text-blue-500">Review</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-primary" />
                      Media Contacts
                    </CardTitle>
                    <CardDescription>Your press and media contacts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">Campus Daily</div>
                        <div className="text-sm text-muted-foreground">editor@campusdaily.edu</div>
                      </li>
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">Student Radio</div>
                        <div className="text-sm text-muted-foreground">programs@studentradio.fm</div>
                      </li>
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">Local News</div>
                        <div className="text-sm text-muted-foreground">tips@localnews.com</div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-primary" />
                      PR Timeline
                    </CardTitle>
                    <CardDescription>Your PR campaign schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <div className="flex-1">
                          <div className="font-medium">Initial Announcement</div>
                          <div className="text-xs text-muted-foreground">2 weeks ago</div>
                        </div>
                      </li>
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <div className="flex-1">
                          <div className="font-medium">Reminder Campaign</div>
                          <div className="text-xs text-muted-foreground">Today</div>
                        </div>
                      </li>
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                        <div className="flex-1">
                          <div className="font-medium">Final Push</div>
                          <div className="text-xs text-muted-foreground">In 2 days</div>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="tech" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckSquare className="mr-2 h-5 w-5 text-primary" />
                      Tech Checklist
                    </CardTitle>
                    <CardDescription>Equipment and setup checklist</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span>Sound system setup</span>
                      </li>
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span>Projector calibration</span>
                      </li>
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Microphone testing</span>
                      </li>
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>WiFi verification</span>
                      </li>
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Backup equipment check</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-primary" />
                      Tech Support Team
                    </CardTitle>
                    <CardDescription>Team members and assignments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">Alex Johnson</div>
                        <div className="text-sm text-muted-foreground">Audio/Visual Lead</div>
                      </li>
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">Taylor Smith</div>
                        <div className="text-sm text-muted-foreground">Streaming Specialist</div>
                      </li>
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">Jamie Wilson</div>
                        <div className="text-sm text-muted-foreground">IT Support</div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-primary" />
                      Tech Schedule
                    </CardTitle>
                    <CardDescription>Setup and testing timeline</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">3:00 PM</div>
                        <div className="text-sm text-muted-foreground">Initial setup & equipment check</div>
                      </li>
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">4:30 PM</div>
                        <div className="text-sm text-muted-foreground">Sound check with performers</div>
                      </li>
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">5:45 PM</div>
                        <div className="text-sm text-muted-foreground">Final system testing</div>
                      </li>
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">6:30 PM</div>
                        <div className="text-sm text-muted-foreground">Doors open, standby support</div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="logistics" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-primary" />
                      Event Timeline
                    </CardTitle>
                    <CardDescription>Complete event schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">3:00 PM - 5:00 PM</div>
                        <div className="text-sm text-muted-foreground">Setup and Preparation</div>
                      </li>
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">6:00 PM - 6:30 PM</div>
                        <div className="text-sm text-muted-foreground">Guest Registration</div>
                      </li>
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">6:30 PM - 7:00 PM</div>
                        <div className="text-sm text-muted-foreground">Opening Remarks</div>
                      </li>
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">7:00 PM - 9:00 PM</div>
                        <div className="text-sm text-muted-foreground">Main Event</div>
                      </li>
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">9:00 PM - 10:00 PM</div>
                        <div className="text-sm text-muted-foreground">Networking & Closing</div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-primary" />
                      Venue Staff
                    </CardTitle>
                    <CardDescription>Venue management and support</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">Venue Manager</div>
                        <div className="text-sm text-muted-foreground">Casey Thompson (555-123-4567)</div>
                      </li>
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">Security Lead</div>
                        <div className="text-sm text-muted-foreground">Morgan Lee (555-234-5678)</div>
                      </li>
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">Catering Coordinator</div>
                        <div className="text-sm text-muted-foreground">Riley Johnson (555-345-6789)</div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckSquare className="mr-2 h-5 w-5 text-primary" />
                      Logistics Checklist
                    </CardTitle>
                    <CardDescription>Essential logistics tasks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span>Venue contract signed</span>
                      </li>
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span>Insurance confirmed</span>
                      </li>
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span>Catering ordered</span>
                      </li>
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Registration table setup</span>
                      </li>
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Signage placement</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="creatives" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Image className="mr-2 h-5 w-5 text-primary" />
                      Design Assets
                    </CardTitle>
                    <CardDescription>Promotional materials and designs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-video bg-gradient-to-r from-primary/20 to-accent/20 rounded flex items-center justify-center">
                        Poster 1
                      </div>
                      <div className="aspect-video bg-gradient-to-r from-primary/20 to-accent/20 rounded flex items-center justify-center">
                        Poster 2
                      </div>
                      <div className="aspect-video bg-gradient-to-r from-primary/20 to-accent/20 rounded flex items-center justify-center">
                        Social Banner
                      </div>
                      <div className="aspect-video bg-gradient-to-r from-primary/20 to-accent/20 rounded flex items-center justify-center">
                        Email Header
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-primary" />
                      Content Calendar
                    </CardTitle>
                    <CardDescription>Content publication schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">Monday</div>
                        <div className="text-sm text-muted-foreground">Event announcement post</div>
                      </li>
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">Wednesday</div>
                        <div className="text-sm text-muted-foreground">Speaker spotlight #1</div>
                      </li>
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">Friday</div>
                        <div className="text-sm text-muted-foreground">Event countdown & teaser</div>
                      </li>
                      <li className="p-2 rounded bg-background/60">
                        <div className="font-medium">Monday (next)</div>
                        <div className="text-sm text-muted-foreground">Final reminder & details</div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckSquare className="mr-2 h-5 w-5 text-primary" />
                      Creative Tasks
                    </CardTitle>
                    <CardDescription>Design and content tasks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span>Event logo finalized</span>
                      </li>
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span>Social media graphics</span>
                      </li>
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Promotional video</span>
                      </li>
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Event program design</span>
                      </li>
                      <li className="p-2 rounded bg-background/60 flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>Speaker intro slides</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventManagement;
