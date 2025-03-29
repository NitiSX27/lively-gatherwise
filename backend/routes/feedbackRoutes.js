const express = require("express");
const Feedback = require("../models/Feedback");

const router = express.Router();

// Submit feedback
router.post("/", async (req, res) => {
  const { eventId, rating, eventExperience, speakerInteraction, sessionRelevance, suggestions } = req.body;

  try {
    const feedback = new Feedback({
      eventId,
      rating,
      eventExperience,
      speakerInteraction,
      sessionRelevance,
      suggestions,
    });

    const savedFeedback = await feedback.save();
    res.status(201).json(savedFeedback);
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ error: "Failed to submit feedback" });
  }
});

// Get feedback for an event
router.get("/:eventId", async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ eventId: req.params.eventId });
    res.json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ error: "Failed to fetch feedback" });
  }
});

module.exports = router;