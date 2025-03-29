import React, { useState } from "react";
import FeedbackForm from "./FeedbackForm"; // Import the FeedbackForm component

type EventProps = {
  eventId: string;
  name: string;
  description: string;
  timeline: string;
};

const Events: React.FC<EventProps> = ({ eventId, name, description, timeline }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false); // State to toggle feedback form visibility

  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-sm text-gray-500 mb-4">
        <strong>Timeline:</strong> {timeline}
      </p>
      <button
        onClick={() => setShowFeedbackForm(!showFeedbackForm)} // Toggle feedback form visibility
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        {showFeedbackForm ? "Close Feedback Form" : "Submit Feedback"}
      </button>

      {showFeedbackForm && (
        <div className="mt-4">
          <FeedbackForm eventId={eventId} /> {/* Render FeedbackForm */}
        </div>
      )}
    </div>
  );
};

export default Events;