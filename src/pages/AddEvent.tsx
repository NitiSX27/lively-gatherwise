import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

type Event = {
  _id: string;
  name: string;
  description: string;
  timeline: string;
};

const AddEvent = () => {
  const { register, handleSubmit, reset } = useForm();
  const [events, setEvents] = useState<Event[]>([]);

  // Fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/events");
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  // Add a new event
  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        reset(); // Reset the form
        fetchEvents(); // Refresh the event list
      }
    } catch (error) {
      console.error("Failed to add event:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add Event</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Event Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="Enter event name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="Enter event description"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Timeline</label>
          <input
            type="text"
            {...register("timeline", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="Enter event timeline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Event
        </button>
      </form>

      <h2 className="text-xl font-bold mt-8">Event List</h2>
      <div className="mt-4 max-h-96 overflow-y-auto border p-4">
        {events.map((event) => (
          <div key={event._id} className="mb-4">
            <h3 className="text-lg font-semibold">{event.name}</h3>
            <p>{event.description}</p>
            <p className="text-sm text-gray-500">{event.timeline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddEvent;