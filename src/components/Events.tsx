import React from "react";

type EventProps = {
  name: string;
  description: string;
  timeline: string;
  onFeedbackSubmit?: () => void; // Optional callback for feedback submission
};

const Events: React.FC<EventProps> = ({ name, description, timeline, onFeedbackSubmit }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-sm text-gray-500 mb-4">
        <strong>Timeline:</strong> {timeline}
      </p>
      <button
        onClick={onFeedbackSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Submit Feedback
      </button>
    </div>
  );
};

export default Events;