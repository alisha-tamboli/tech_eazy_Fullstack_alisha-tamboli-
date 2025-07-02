const express = require('express');
const router = express.Router();
const { getTodaySummary } = require('../controllers/parcelController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/today-summary', verifyToken, getTodaySummary);

module.exports = router;
