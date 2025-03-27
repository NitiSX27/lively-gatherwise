
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EventManagement = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Event Management</h1>
          <p>This is the Event Management page.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventManagement;
