// backend/routes/deliveryOrderRoutes.js
const express = require('express');
const multer = require('multer');
const {
  getOrders,
  getOrdersForToday,
  uploadOrderFile
} = require('../controllers/deliveryOrderController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (_, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

router.get('/', getOrders); // filter by vendor & date
router.get('/today', getOrdersForToday);
router.post('/upload', upload.single('file'), uploadOrderFile);

module.exports = router;
