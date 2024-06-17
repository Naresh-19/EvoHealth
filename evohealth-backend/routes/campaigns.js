// EvoHealth-backend/routes/campaigns.js

const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign'); // Your Campaign model

// Route to fetch all campaigns
router.get('/campaigns', async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
