// src/components/LoginForm.jsx
import React, { useState } from 'react';
import API from '../api';
import '../styles/LoginForm.css';

export default function LoginForm({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/login', form);
      localStorage.setItem('token', res.data.token);
      onLogin(); // re-render App
    } catch {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container container">
      <h2 className="text-center mb-3">🔐 Vendor Login</h2>
      <form className="card p-4 shadow" onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          className="form-control mb-2"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {error && <div className="text-danger">{error}</div>}
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
