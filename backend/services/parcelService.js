const db = require('../models/db');

exports.fetchTodayParcelSummary = (callback) => {
  const today = new Date().toISOString().split('T')[0];

  const query = `
    SELECT address AS pincode, COUNT(*) AS count
    FROM parcels
    WHERE date(createdAt) = ?
    GROUP BY address
  `;

  db.all(query, [today], callback);
};
