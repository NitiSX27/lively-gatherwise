import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from "@/components/ui/button";

type FormData = {
  eventName: string;
  prTasks: string;
  techTasks: string;
  logisticsTasks: string;
  creativesTasks: string;
};

type EventManagementFormProps = {
  onSubmit: SubmitHandler<FormData>;
  isLoading: boolean;
};

const EventManagementForm: React.FC<EventManagementFormProps> = ({ onSubmit, isLoading }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-12 space-y-4">
      <div>
        <label className="block text-sm font-medium">Event Name</label>
        <input
          type="text"
          {...register("eventName", { required: "Event name is required" })}
          className="w-full p-2 border rounded"
          placeholder="Enter event name"
        />
        {errors.eventName && <p className="text-red-500 text-sm">{errors.eventName.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">PR Tasks (comma-separated)</label>
        <input
          type="text"
          {...register("prTasks")}
          className="w-full p-2 border rounded"
          placeholder="e.g., Write press release, Contact media"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Tech Tasks (comma-separated)</label>
        <input
          type="text"
          {...register("techTasks")}
          className="w-full p-2 border rounded"
          placeholder="e.g., Setup sound system, Test microphones"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Logistics Tasks (comma-separated)</label>
        <input
          type="text"
          {...register("logisticsTasks")}
          className="w-full p-2 border rounded"
          placeholder="e.g., Book venue, Arrange catering"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Creatives Tasks (comma-separated)</label>
        <input
          type="text"
          {...register("creativesTasks")}
          className="w-full p-2 border rounded"
          placeholder="e.g., Design posters, Create social media graphics"
        />
      </div>
      <Button type="submit" className="px-4 py-2 bg-primary text-white rounded">
        {isLoading ? 'Generating Tasks...' : 'Submit'}
      </Button>
    </form>
  );
};

export default EventManagementForm;