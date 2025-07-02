// backend/models/db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/parcel.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS vendors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    subscription TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS delivery_orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    vendorId INTEGER,
    orderDate TEXT,
    file TEXT,
    FOREIGN KEY(vendorId) REFERENCES vendors(id)
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS parcels (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  deliveryOrderId INTEGER,
  customerName TEXT,
  address TEXT,
  trackingNumber TEXT,
  createdAt TEXT,
  FOREIGN KEY(deliveryOrderId) REFERENCES delivery_orders(id)
)`);

});

module.exports = db;
