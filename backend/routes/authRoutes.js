const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware"); // Ensure middleware exists

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Logged-in User Route (New)
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Exclude password
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add item to wishlist
router.post('/wishlist/add', authMiddleware, async (req, res) => {
  const { type, itemId, title, details } = req.body;
  try {
    const user = await User.findById(req.user.id);
    // Check if item already exists in wishlist
    const exists = user.wishlist.some((item) => item.itemId === itemId && item.type === type);
    if (exists) {
      return res.status(400).json({ message: 'Item already in wishlist' });
    }
    user.wishlist.push({ type, itemId, title, details });
    await user.save();
    res.status(200).json({ message: 'Item added to wishlist' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Remove item from wishlist
router.post('/wishlist/remove', authMiddleware, async (req, res) => {
  const { itemId, type } = req.body;
  try {
    const user = await User.findById(req.user.id);
    user.wishlist = user.wishlist.filter(
      (item) => !(item.itemId === itemId && item.type === type)
    );
    await user.save();
    res.status(200).json({ message: 'Item removed from wishlist' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's wishlist
router.get('/wishlist', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json(user.wishlist);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
  
  // In the above code, we have created a new route  /me  that returns the logged-in user details. This route uses the  authMiddleware  to authenticate the user. 
  // Now, let’s update the  server.js  file to include the new route.  