const db = require('../models/db');

exports.fetchAllVendors = (limit, offset, callback) => {
  db.all(`SELECT * FROM vendors LIMIT ? OFFSET ?`, [limit, offset], callback);
};

exports.insertVendor = (name, subscription, callback) => {
  db.run(`INSERT INTO vendors (name, subscription) VALUES (?, ?)`, [name, subscription], callback);
};
