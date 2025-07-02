const fs = require('fs');
const db = require('../models/db');

exports.fetchOrders = (vendor, date, page, callback) => {
  const limit = 5;
  const offset = (page - 1) * limit;
  const query = `
    SELECT do.id, do.orderDate, v.name as vendorName, do.file
    FROM delivery_orders do
    JOIN vendors v ON v.id = do.vendorId
    WHERE do.orderDate = ? AND v.name = ?
    LIMIT ? OFFSET ?`;

  db.all(query, [date, vendor, limit, offset], callback);
};

exports.fetchTodayOrders = (callback) => {
  const today = new Date().toISOString().split('T')[0];
  const query = `
    SELECT do.id, do.orderDate, v.name as vendorName, do.file
    FROM delivery_orders do
    JOIN vendors v ON v.id = do.vendorId
    WHERE do.orderDate = ?`;

  db.all(query, [today], callback);
};

exports.parseAndSaveOrder = (vendorId, orderDate, filePath, callback) => {
  db.run(
    `INSERT INTO delivery_orders (vendorId, orderDate, file) VALUES (?, ?, ?)`,
    [vendorId, orderDate, filePath],
    function (err) {
      if (err) return callback(err);

      const deliveryOrderId = this.lastID;

      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return callback(err);

        const lines = data.trim().split('\n');

        const stmt = db.prepare(
          `INSERT INTO parcels (deliveryOrderId, customerName, address, trackingNumber, createdAt)
            VALUES (?, ?, ?, ?, ?)`
        );

        lines.forEach((line) => {
          const [customerName, address, trackingNumber] = line.split(',');
          stmt.run([deliveryOrderId, customerName, address, trackingNumber, new Date().toISOString()]);
        });

        stmt.finalize();
        callback(null);
      });
    }
  );
};
