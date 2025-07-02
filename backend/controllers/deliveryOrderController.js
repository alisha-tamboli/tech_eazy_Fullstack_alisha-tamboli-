const {
  fetchOrders,
  fetchTodayOrders,
  parseAndSaveOrder
} = require('../services/deliveryOrderService');

exports.getOrders = (req, res) => {
  const { vendor, date, page = 1 } = req.query;
  fetchOrders(vendor, date, page, (err, orders) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(orders);
  });
};

exports.getOrdersForToday = (req, res) => {
  fetchTodayOrders((err, orders) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(orders);
  });
};

exports.uploadOrderFile = (req, res) => {
  const { vendorId, orderDate } = req.body;
  const filePath = req.file.path;

  parseAndSaveOrder(vendorId, orderDate, filePath, (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ message: 'Order and parcels saved' });
  });
};
