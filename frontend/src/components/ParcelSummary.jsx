import React, { useEffect, useState } from 'react';
import API from '../api';
import '../styles/ParcelSummary.css';

export default function ParcelSummary() {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    API.get('/parcels/today-summary')
      .then(res => setSummary(res.data))
      .catch(err => console.error('Failed to fetch summary', err));
  }, []);

  return (
    <div className="container mt-4">
      <h4 className="mb-3">📦 Today’s Parcel Summary (Grouped by Pincode)</h4>
      {summary.length === 0 ? (
        <p>No parcels found for today.</p>
      ) : (
        <table className="table table-bordered shadow">
          <thead className="table-dark">
            <tr>
              <th>Pincode</th>
              <th>Parcel Count</th>
            </tr>
          </thead>
          <tbody>
            {summary.map((item, index) => (
              <tr key={index}>
                <td>{item.pincode}</td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
