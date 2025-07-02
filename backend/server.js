const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const deliveryOrderRoutes = require('./routes/deliveryOrderRoutes');
const vendorRoutes = require('./routes/vendorRoutes');
const authRoutes = require('./routes/authRoutes');
const { verifyToken } = require('./middleware/authMiddleware');
const parcelRoutes = require('./routes/parcelRoutes');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/login', authRoutes);
app.use('/api/vendors', verifyToken, vendorRoutes);
app.use('/api/delivery-orders', verifyToken, deliveryOrderRoutes);
app.use('/api/parcels', verifyToken, parcelRoutes);


const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
