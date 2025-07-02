const { fetchTodayParcelSummary } = require('../services/parcelService');

exports.getTodaySummary = (req, res) => {
  fetchTodayParcelSummary((err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(result);
  });
};
