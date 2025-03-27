
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, PieChart, Line, Bar, Pie, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, AlertTriangle, User, Users, Share2 } from 'lucide-react';

const PRMarketing = () => {
  // Sample data for AI content suggestions
  const contentIdeas = [
    { id: 1, title: "Eco-Friendly Campus Initiative", type: "Campaign", score: 92 },
    { id: 2, title: "Student Leaders Spotlight", type: "Article Series", score: 88 },
    { id: 3, title: "Finals Week Survival Guide", type: "Infographic", score: 85 },
    { id: 4, title: "Campus Hidden Gems", type: "Video Series", score: 82 },
  ];

  // Sample data for sentiment analysis
  const sentimentData = [
    { name: 'Positive', value: 65, color: '#22c55e' },
    { name: 'Neutral', value: 25, color: '#3b82f6' },
    { name: 'Negative', value: 10, color: '#ef4444' },
  ];

  // Sample data for engagement metrics
  const engagementData = [
    { day: 'Mon', posts: 5, engagement: 120, reach: 1200 },
    { day: 'Tue', posts: 3, engagement: 80, reach: 900 },
    { day: 'Wed', posts: 7, engagement: 200, reach: 2100 },
    { day: 'Thu', posts: 4, engagement: 150, reach: 1800 },
    { day: 'Fri', posts: 6, engagement: 220, reach: 2400 },
    { day: 'Sat', posts: 2, engagement: 90, reach: 1100 },
    { day: 'Sun', posts: 1, engagement: 40, reach: 600 },
  ];

  // Sample sponsor suggestions
  const sponsorSuggestions = [
    {
      name: "Tech Solutions Inc.",
      match: "High match - tech events",
      logo: "TS",
      color: "bg-blue-500"
    },
    {
      name: "Eco Campus Initiative",
      match: "Good match - sustainability",
      logo: "EC",
      color: "bg-green-500"
    },
    {
      name: "Campus Eats Delivery",
      match: "High match - student services",
      logo: "CE",
      color: "bg-orange-500"
    },
    {
      name: "University Credit Union",
      match: "Good match - student finance",
      logo: "UC",
      color: "bg-purple-500"
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4">
              Marketing Tools
            </span>
            <h1 className="text-4xl font-bold mb-4">PR & Marketing Hub</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AI-powered content generation, sentiment analysis, and sponsor suggestions
            </p>
          </div>

          {/* AI Content Generation Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">AI Content Suggestions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contentIdeas.map((idea) => (
                <Card key={idea.id} className="glass-card card-3d-effect overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{idea.title}</CardTitle>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        {idea.score}%
                      </Badge>
                    </div>
                    <CardDescription>{idea.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <button className="text-sm text-primary flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" /> Generate
                      </button>
                      <button className="text-sm text-primary flex items-center">
                        <Share2 className="h-4 w-4 mr-1" /> Share
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Sentiment Analysis Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Sentiment Analysis</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="glass-card card-3d-effect lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="mr-2 h-5 w-5 text-primary" />
                    Social Media Engagement
                  </CardTitle>
                  <CardDescription>Last 7 days of engagement metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={engagementData}>
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="engagement" fill="#8884d8" name="Engagement" />
                        <Bar dataKey="reach" fill="#82ca9d" name="Reach" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card card-3d-effect">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ThumbsUp className="mr-2 h-5 w-5 text-primary" />
                    Sentiment Breakdown
                  </CardTitle>
                  <CardDescription>Overall sentiment analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-60 flex items-center justify-center">
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
                  <div className="grid grid-cols-3 text-center mt-4">
                    <div>
                      <div className="text-2xl font-bold text-green-500">65%</div>
                      <div className="text-sm text-muted-foreground">Positive</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-500">25%</div>
                      <div className="text-sm text-muted-foreground">Neutral</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-500">10%</div>
                      <div className="text-sm text-muted-foreground">Negative</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Sponsor Suggestions */}
          <section>
            <h2 className="text-2xl font-bold mb-6">AI Sponsor Suggestions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsorSuggestions.map((sponsor, index) => (
                <Card key={index} className="glass-card card-3d-effect">
                  <CardHeader className="pb-2">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-full ${sponsor.color} flex items-center justify-center text-white font-bold mr-3`}>
                        {sponsor.logo}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{sponsor.name}</CardTitle>
                        <CardDescription className="text-xs">{sponsor.match}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-2">
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Users className="h-4 w-4 mr-1" /> Previously sponsored 5 similar events
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <User className="h-4 w-4 mr-1" /> Contact: sponsorships@example.com
                      </div>
                      <button className="mt-2 text-primary text-sm flex w-full justify-center items-center border border-primary/20 rounded-full py-1.5 hover:bg-primary/10 transition-colors">
                        View Sponsor Profile
                      </button>
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

export default PRMarketing;
