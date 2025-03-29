import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Events from "../components/Events";
import FeedbackForm from "../components/FeedbackForm"; // Import the FeedbackForm component
import axios from "axios";

type Event = {
  _id: string;
  name: string;
  description: string;
  timeline: string;
};

const Index = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null); // State to track selected event for feedback
  const [loading, setLoading] = useState<boolean>(false);
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [platform, setPlatform] = useState<string>("Instagram");

  // Fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/events");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleFeedbackSubmit = (eventName: string) => {
    alert(`Feedback submitted for event: ${eventName}`);
  };

  const handleGenerateContent = async () => {
    if (!selectedEvent) {
      alert("Please select an event to generate content.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/social-media/generate-post", {
        eventName: selectedEvent.name,
        description: selectedEvent.description,
        platform,
      });
      setGeneratedContent(response.data.content);
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePostToPlatform = () => {
    if (!generatedContent) {
      alert("Please generate content before posting.");
      return;
    }

    alert(`Post uploaded to ${platform} successfully!`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />

        {/* Events Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore the latest events happening in your organization.
              </p>
            </div>

            <div className="mt-6 max-h-96 overflow-y-auto space-y-4 animate-scroll">
              {events.length === 0 ? (
                <p className="text-gray-500">No events available.</p>
              ) : (
                events.map((event) => (
                  <Events
                    key={event._id}
                    eventId={event._id} // Pass eventId to the Events component
                    name={event.name}
                    description={event.description}
                    timeline={event.timeline}
                  />
                ))
              )}
            </div>
          </div>
        </section>

        {/* Social Media Automation Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Automate Social Media Posts</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Use AI to generate and post engaging content for your events on social media platforms.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Select Event</label>
                <select
                  value={selectedEvent?._id || ""}
                  onChange={(e) =>
                    setSelectedEvent(events.find((event) => event._id === e.target.value) || null)
                  }
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select an event</option>
                  {events.map((event) => (
                    <option key={event._id} value={event._id}>
                      {event.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Platform</label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="Instagram">Instagram</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Twitter">Twitter</option>
                </select>
              </div>
              <button
                onClick={handleGenerateContent}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                disabled={loading}
              >
                {loading ? "Generating..." : "Generate Content"}
              </button>
              {generatedContent && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Generated Content</h3>
                  <p className="p-2 border rounded bg-gray-100">{generatedContent}</p>
                  <button
                    onClick={handlePostToPlatform}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 mt-2"
                  >
                    Post to {platform}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center fade-in-sequence">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-8">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your college events?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of college organizations already using CampusEvents to plan and manage successful events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/signup" className="btn-primary">
                  Start Free Trial
                </a>
                <a href="/demo" className="px-6 py-3 rounded-full border border-border hover:border-primary/50 transition-colors duration-300">
                  Request Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;