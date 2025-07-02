import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 mb-3">📦 Welcome to Zero Mile Delivery</h1>
      <p className="lead mb-4">
        Your fast and reliable solution for parcel delivery and order management.
      </p>
      <button className="btn btn-primary btn-lg px-4" onClick={() => navigate('/login')}>
        Login
      </button>
    </div>
  );
}
