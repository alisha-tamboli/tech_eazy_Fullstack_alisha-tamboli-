import React from 'react';

export default function Home() {
  const token = localStorage.getItem('token');

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 mb-3">📦 Welcome to Zero Mile Delivery</h1>
      <p className="lead mb-4">
        Your fast and reliable solution for parcel delivery and order management.
      </p>
      {!token && (
        <p className="text-muted">Please log in to access your dashboard.</p>
      )}
    </div>
  );
}
