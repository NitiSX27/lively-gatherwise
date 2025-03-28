const express = require("express");
const Event = require("../models/Event");
const authMiddleware = require("../middleware/authMiddleware"); // Import the auth middleware

const router = express.Router();

// Get all events (protected route)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

// Add a new event (protected route)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, description, timeline } = req.body;
    const newEvent = new Event({ name, description, timeline });
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(500).json({ error: "Failed to add event" });
  }
});

module.exports = router;