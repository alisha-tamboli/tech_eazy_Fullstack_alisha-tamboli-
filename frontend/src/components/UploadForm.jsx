// src/components/UploadForm.jsx
import React, { useState, useEffect } from 'react';
import API from '../api';
import '../styles/UploadForm.css';

export default function UploadForm() {
  const [vendors, setVendors] = useState([]);
  const [form, setForm] = useState({ vendorId: '', orderDate: '', file: null });

    useEffect(() => {
    API.get('/vendors?page=1')
        .then(res => setVendors(res.data))
        .catch(err => {
        console.error('Error fetching vendors:', err);
        });
    }, []);

  const handleFileChange = e => setForm({ ...form, file: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('vendorId', form.vendorId);
    fd.append('orderDate', form.orderDate);
    fd.append('file', form.file);
    await API.post('/delivery-orders/upload', fd);
    alert('Upload successful!');
  };

  return (
    <form className="card p-4 shadow mb-4 upload-form" onSubmit={handleSubmit}>
      <h4>Upload Delivery Order</h4>
      <select className="form-control mb-2" onChange={e => setForm({ ...form, vendorId: e.target.value })}>
        <option value="">Select Vendor</option>
        {vendors.map(v => (
        <option key={v.id} value={v.id}>{v.name}</option>
        )
    )}
      </select>
      <input className="form-control mb-2" type="date" onChange={e => setForm({ ...form, orderDate: e.target.value })} />
      <input className="form-control mb-2" type="file" accept=".txt" onChange={handleFileChange} />
      <button className="btn btn-success w-100">Upload</button>
    </form>
  );
}
