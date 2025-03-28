import React, { createContext, useContext, useState, useEffect } from 'react';

export type EventAnalysis = {
  prStrategies: Array<{
    strategy: string;
    impact: 'Low' | 'Medium' | 'High';
    timeline: string;
    expectedOutcome: string;
  }>;
  marketingInsights: Array<{
    insight: string;
    recommendation: string;
    priority: 'Low' | 'Medium' | 'High';
  }>;
  audienceMetrics: {
    expectedReach: number;
    targetDemographic: string[];
    engagementPrediction: number;
  };
  timestamp: string;
};

export type SentimentAnalysis = {
  positive: number;
  neutral: number;
  negative: number;
};

export type ContentSuggestion = {
  id: number;
  title: string;
  type: string;
  score: number;
  description: string;
};

export type SponsorSuggestion = {
  name: string;
  match: string;
  logo: string;
  color: string;
  description: string;
  industry: string;
};

type EventContextType = {
  latestEventAnalysis: EventAnalysis | null;
  updateEventAnalysis: (analysis: EventAnalysis) => void;
  sentimentAnalysis: SentimentAnalysis;
  updateSentimentAnalysis: (analysis: SentimentAnalysis) => void;
  contentSuggestions: ContentSuggestion[];
  updateContentSuggestions: (suggestions: ContentSuggestion[]) => void;
  sponsorSuggestions: SponsorSuggestion[];
  updateSponsorSuggestions: (suggestions: SponsorSuggestion[]) => void;
  eventName: string;
  updateEventName: (name: string) => void;
  eventType: string;
  updateEventType: (type: string) => void;
};

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [latestEventAnalysis, setLatestEventAnalysis] = useState<EventAnalysis | null>(null);
  const [sentimentAnalysis, setSentimentAnalysis] = useState<SentimentAnalysis>({
    positive: 65,
    neutral: 25,
    negative: 10
  });
  const [contentSuggestions, setContentSuggestions] = useState<ContentSuggestion[]>([]);
  const [sponsorSuggestions, setSponsorSuggestions] = useState<SponsorSuggestion[]>([]);
  const [eventName, setEventName] = useState<string>('');
  const [eventType, setEventType] = useState<string>('');

  const updateEventAnalysis = (analysis: EventAnalysis) => {
    setLatestEventAnalysis(analysis);
  };

  const updateSentimentAnalysis = (analysis: SentimentAnalysis) => {
    setSentimentAnalysis(analysis);
  };

  const updateContentSuggestions = (suggestions: ContentSuggestion[]) => {
    setContentSuggestions(suggestions);
  };

  const updateSponsorSuggestions = (suggestions: SponsorSuggestion[]) => {
    setSponsorSuggestions(suggestions);
  };

  const updateEventName = (name: string) => {
    setEventName(name);
  };

  const updateEventType = (type: string) => {
    setEventType(type);
  };

  return (
    <EventContext.Provider value={{ 
      latestEventAnalysis, 
      updateEventAnalysis,
      sentimentAnalysis,
      updateSentimentAnalysis,
      contentSuggestions,
      updateContentSuggestions,
      sponsorSuggestions,
      updateSponsorSuggestions,
      eventName,
      updateEventName,
      eventType,
      updateEventType
    }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
};
