const express = require("express");
const Event = require("../models/Event");

const router = express.Router();

// Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

// Add a new event
router.post("/", async (req, res) => {
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