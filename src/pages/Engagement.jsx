
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, Send, QrCode, Calendar, User, Users, Heart, Star, 
  Mail, Phone, School, MapPin, Ticket, Sparkles, Zap, Clock
} from 'lucide-react';

const Engagement = () => {
  const [message, setMessage] = useState('');
  
  // Sample participants data
  const participants = [
    { id: 1, name: "Alex Johnson", role: "Student", major: "Computer Science", university: "Tech University", interests: ["AI", "Web Dev", "Gaming"] },
    { id: 2, name: "Jamie Smith", role: "Student", major: "Business", university: "State College", interests: ["Marketing", "Entrepreneurship"] },
    { id: 3, name: "Taylor Brown", role: "Student", major: "Engineering", university: "Tech University", interests: ["Robotics", "IoT"] },
    { id: 4, name: "Jordan Lee", role: "Student", major: "Design", university: "Arts Institute", interests: ["UI/UX", "Digital Art"] },
    { id: 5, name: "Casey Miller", role: "Student", major: "Psychology", university: "State College", interests: ["Research", "Mental Health"] },
    { id: 6, name: "Riley Wilson", role: "Faculty", major: "Computer Science", university: "Tech University", interests: ["AI", "Machine Learning"] },
  ];
  
  // Sample events data
  const events = [
    { id: 1, title: "Tech Showcase", date: "2023-06-15", time: "3:00 PM - 6:00 PM", location: "Main Campus, Building A" },
    { id: 2, title: "Networking Mixer", date: "2023-06-17", time: "5:00 PM - 7:00 PM", location: "Student Center" },
    { id: 3, title: "Hackathon Kickoff", date: "2023-06-20", time: "9:00 AM - 9:00 PM", location: "Innovation Lab" },
  ];

  // Sample suggested matches based on interests
  const suggestedMatches = [
    { id: 2, name: "Jamie Smith", matchScore: 85, commonInterests: ["Marketing"] },
    { id: 6, name: "Riley Wilson", matchScore: 92, commonInterests: ["AI", "Machine Learning"] },
    { id: 3, name: "Taylor Brown", matchScore: 78, commonInterests: ["Technology"] },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    // In a real app, this would send the message
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4">
              Attendee Engagement
            </span>
            <h1 className="text-4xl font-bold mb-4">Connect & Engage</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Streamline registration, facilitate networking, and enhance the attendee experience
            </p>
          </div>

          <Tabs defaultValue="registration" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="registration" className="flex items-center justify-center gap-2">
                  <Ticket className="h-4 w-4" />
                  <span>Registration</span>
                </TabsTrigger>
                <TabsTrigger value="networking" className="flex items-center justify-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Networking</span>
                </TabsTrigger>
                <TabsTrigger value="chatbot" className="flex items-center justify-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Support</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Registration Tab Content */}
            <TabsContent value="registration">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Registration Form */}
                <Card className="glass-card card-3d-effect">
                  <CardHeader>
                    <CardTitle>Event Registration</CardTitle>
                    <CardDescription>Register for upcoming campus events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                        <Input id="name" placeholder="Enter your full name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input id="email" type="email" placeholder="your.email@university.edu" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="major" className="text-sm font-medium">Major/Department</label>
                          <Input id="major" placeholder="e.g. Computer Science" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="year" className="text-sm font-medium">Year/Status</label>
                          <Input id="year" placeholder="e.g. Junior, Senior" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="events" className="text-sm font-medium">Select Events</label>
                        <div className="space-y-2">
                          {events.map((event) => (
                            <div key={event.id} className="flex items-start space-x-2">
                              <input 
                                type="checkbox" 
                                id={`event-${event.id}`} 
                                className="mt-1"
                              />
                              <label htmlFor={`event-${event.id}`} className="text-sm">
                                <div className="font-medium">{event.title}</div>
                                <div className="text-muted-foreground text-xs flex items-center mt-0.5">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · {event.time}
                                </div>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="interests" className="text-sm font-medium">Interests (for networking)</label>
                        <Input id="interests" placeholder="e.g. AI, Marketing, Research (comma separated)" />
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Register Now</Button>
                  </CardFooter>
                </Card>

                {/* QR Code Ticket */}
                <div className="space-y-6">
                  <Card className="glass-card card-3d-effect">
                    <CardHeader>
                      <CardTitle>Digital Ticket</CardTitle>
                      <CardDescription>Your all-access pass to campus events</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                      <div className="w-48 h-48 bg-white p-4 rounded-lg mb-4 flex items-center justify-center">
                        <QrCode className="h-32 w-32 text-primary" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-bold text-lg">Alex Johnson</h3>
                        <p className="text-muted-foreground">Tech University</p>
                        <div className="mt-2 flex justify-center gap-2">
                          <Badge variant="outline" className="bg-primary/10 text-primary">
                            Tech Showcase
                          </Badge>
                          <Badge variant="outline" className="bg-primary/10 text-primary">
                            Networking Mixer
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button variant="outline">Download Ticket</Button>
                    </CardFooter>
                  </Card>

                  <Card className="glass-card card-3d-effect">
                    <CardHeader>
                      <CardTitle>Quick Registration</CardTitle>
                      <CardDescription>Check-in faster at the event</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent/5 transition-colors">
                          <Zap className="h-5 w-5 text-amber-500" />
                          <div>
                            <div className="font-medium">Express Check-in</div>
                            <p className="text-sm text-muted-foreground">Skip the line with our mobile app</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent/5 transition-colors">
                          <Sparkles className="h-5 w-5 text-purple-500" />
                          <div>
                            <div className="font-medium">Pre-event Networking</div>
                            <p className="text-sm text-muted-foreground">Connect with attendees before the event</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Networking Tab Content */}
            <TabsContent value="networking">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Participant Directory */}
                <Card className="glass-card card-3d-effect lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Participant Directory</CardTitle>
                    <CardDescription>Find and connect with fellow attendees</CardDescription>
                    <div className="mt-4">
                      <Input placeholder="Search participants..." />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {participants.map((participant) => (
                        <div 
                          key={participant.id} 
                          className="p-4 border rounded-lg hover:bg-accent/5 transition-colors flex items-start gap-3"
                        >
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {participant.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{participant.name}</div>
                            <div className="text-sm text-muted-foreground">{participant.major}</div>
                            <div className="text-xs text-muted-foreground flex items-center mt-1">
                              <School className="h-3 w-3 mr-1" />
                              {participant.university}
                            </div>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {participant.interests.map((interest, i) => (
                                <Badge key={i} variant="outline" className="text-xs bg-accent/10">
                                  {interest}
                                </Badge>
                              ))}
                            </div>
                            <div className="mt-3 flex gap-2">
                              <Button size="sm" variant="outline" className="h-8 text-xs">
                                <Mail className="h-3 w-3 mr-1" />
                                Message
                              </Button>
                              <Button size="sm" variant="outline" className="h-8 text-xs">
                                <User className="h-3 w-3 mr-1" />
                                Connect
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Networking Suggestions */}
                <div className="space-y-6">
                  <Card className="glass-card card-3d-effect">
                    <CardHeader>
                      <CardTitle>AI Matchmaking</CardTitle>
                      <CardDescription>People you might want to connect with</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {suggestedMatches.map((match) => (
                        <div key={match.id} className="p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-10 w-10">
                                <AvatarFallback className="bg-primary/10 text-primary">
                                  {match.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{match.name}</div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  Common interests: {match.commonInterests.join(', ')}
                                </div>
                              </div>
                            </div>
                            <Badge className="bg-primary text-primary-foreground">
                              {match.matchScore}%
                            </Badge>
                          </div>
                          <div className="mt-3 flex gap-2">
                            <Button size="sm" className="h-8 w-full text-xs">
                              <Sparkles className="h-3 w-3 mr-1" />
                              Connect
                            </Button>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="glass-card card-3d-effect">
                    <CardHeader>
                      <CardTitle>Networking Events</CardTitle>
                      <CardDescription>Upcoming opportunities to connect</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                        <div className="font-medium">Speed Networking</div>
                        <div className="text-sm text-muted-foreground flex items-center mt-1">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          June 16, 2023
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center mt-1">
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          4:00 PM - 5:30 PM
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center mt-1">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          Student Center, Room 202
                        </div>
                        <Button variant="outline" size="sm" className="mt-3 w-full">
                          RSVP
                        </Button>
                      </div>
                      <div className="p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                        <div className="font-medium">Industry Mixer</div>
                        <div className="text-sm text-muted-foreground flex items-center mt-1">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          June 18, 2023
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center mt-1">
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          6:00 PM - 8:00 PM
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center mt-1">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          Innovation Center
                        </div>
                        <Button variant="outline" size="sm" className="mt-3 w-full">
                          RSVP
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Chatbot Tab Content */}
            <TabsContent value="chatbot">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="glass-card card-3d-effect lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                      AI Event Assistant
                    </CardTitle>
                    <CardDescription>Get instant answers to your questions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96 border rounded-lg p-4 mb-4 overflow-y-auto space-y-4">
                      {/* AI Message */}
                      <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
                        </Avatar>
                        <div className="bg-accent/10 rounded-lg p-3 max-w-[80%]">
                          <p>Hello! I'm your AI event assistant. How can I help you today? You can ask me about event schedules, locations, speakers, or registration information.</p>
                        </div>
                      </div>
                      
                      {/* User Message */}
                      <div className="flex items-start justify-end gap-3">
                        <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                          <p>What time does the Tech Showcase start?</p>
                        </div>
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-accent text-accent-foreground">U</AvatarFallback>
                        </Avatar>
                      </div>
                      
                      {/* AI Response */}
                      <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
                        </Avatar>
                        <div className="bg-accent/10 rounded-lg p-3 max-w-[80%]">
                          <p>The Tech Showcase is scheduled for June 15th from 3:00 PM to 6:00 PM at the Main Campus, Building A. Would you like me to send you a calendar invitation?</p>
                        </div>
                      </div>
                      
                      {/* User Message */}
                      <div className="flex items-start justify-end gap-3">
                        <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                          <p>Yes, please! Also, are there any specific sessions I should attend?</p>
                        </div>
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-accent text-accent-foreground">U</AvatarFallback>
                        </Avatar>
                      </div>
                      
                      {/* AI Response */}
                      <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
                        </Avatar>
                        <div className="bg-accent/10 rounded-lg p-3 max-w-[80%]">
                          <p>I've sent a calendar invitation to your registered email. Based on your interests in AI and Web Development, I recommend attending the "Future of AI in Education" session at 3:30 PM and the "Web3 Development Workshop" at 4:45 PM. Would you like more details about these sessions?</p>
                        </div>
                      </div>
                    </div>
                    
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                      <Input 
                        placeholder="Type your question here..." 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1"
                      />
                      <Button type="submit">
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <Card className="glass-card card-3d-effect">
                    <CardHeader>
                      <CardTitle>Event FAQ</CardTitle>
                      <CardDescription>Common questions and answers</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                        <div className="font-medium">Where can I park?</div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Free parking is available in Lots A and B with a valid student ID. Visitor parking passes can be obtained at the entrance gate.
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                        <div className="font-medium">Is food provided?</div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Light refreshments will be available at all events. The Networking Mixer will include a buffet dinner.
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                        <div className="font-medium">Can I bring a guest?</div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Yes, each registered attendee may bring one guest. Please register them in advance through the guest registration form.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-card card-3d-effect">
                    <CardHeader>
                      <CardTitle>Contact Support</CardTitle>
                      <CardDescription>Need more help?</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent/5 transition-colors">
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">Email Support</div>
                          <p className="text-sm text-muted-foreground">events@university.edu</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent/5 transition-colors">
                        <Phone className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">Phone Support</div>
                          <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                        </div>
                      </div>
                      <Button className="w-full">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Live Chat
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Engagement;
