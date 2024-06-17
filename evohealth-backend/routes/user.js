// EvoHealth-backend/routes/user.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // Middleware to verify JWT token
const User = require('../models/User'); // Your User model

// Route to fetch user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to update user profile
router.put('/profile/update', auth, async (req, res) => {
  const { name, email } = req.body;
  try {
    let user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.name = name;
    user.email = email;
    await user.save();
    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to fetch medical QR code (example)
router.get('/medicalQR', auth, async (req, res) => {
  try {
    const qrCodeUrl = 'https://example.com/medicalQR'; // Replace with actual QR code generation logic
    res.json({ qrCodeUrl });
  } catch (error) {
    console.error('Error generating medical QR code:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
