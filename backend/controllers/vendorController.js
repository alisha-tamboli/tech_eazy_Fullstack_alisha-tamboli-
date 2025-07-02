const { fetchAllVendors, insertVendor } = require('../services/vendorService');

exports.getAllVendors = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const offset = (page - 1) * limit;

  fetchAllVendors(limit, offset, (err, vendors) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(vendors);
  });
};

exports.createVendor = (req, res) => {
  const { name, subscription } = req.body;
  insertVendor(name, subscription, (err) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(201).json({ message: "Vendor added" });
  });
};
