import React, { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { EventProvider } from './context/EventContext';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EventManagement from "./pages/EventManagement";
import PRMarketing from "./pages/PRMarketing";
import Engagement from "./pages/Engagement";
import Analytics from "./pages/Analytics";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import AddEvent from "./pages/AddEvent";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data._id) {
            setUser(data);
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem("token");
            setIsAuthenticated(false);
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <EventProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />

              {/* Protected Routes (Require Authentication) */}
              <Route
                path="/event-management"
                element={isAuthenticated ? <EventManagement /> : <Navigate to="/auth/login" />}
              />
              <Route
                path="/pr-marketing"
                element={isAuthenticated ? <PRMarketing /> : <Navigate to="/auth/login" />}
              />
              <Route
                path="/engagement"
                element={isAuthenticated ? <Engagement /> : <Navigate to="/auth/login" />}
              />
              <Route
                path="/analytics"
                element={isAuthenticated ? <Analytics /> : <Navigate to="/auth/login" />}
              />

              {/* Public Routes */}
              <Route
                path="/auth/login"
                element={<Login setAuth={setIsAuthenticated} setUser={setUser} />}
              />
              <Route
                path="/auth/signup"
                element={<Signup setAuth={setIsAuthenticated} setUser={setUser} />}
              />
              <Route path="/add-event" element={<AddEvent />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </EventProvider>
  );
};

export default App;
