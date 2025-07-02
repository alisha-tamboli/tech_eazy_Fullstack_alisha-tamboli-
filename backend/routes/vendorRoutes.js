const express = require('express');
const { getAllVendors, createVendor } = require('../controllers/vendorController');
const router = express.Router();

router.get('/', getAllVendors);
router.post('/', createVendor); // Optional: to add a vendor manually

module.exports = router;
