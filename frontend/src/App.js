import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import UploadForm from './components/UploadForm';
import OrderList from './components/OrderList';
import ParcelSummary from './components/ParcelSummary';
import Home from './pages/Home';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  if (!token) {
    return (
      <div className="container">
        <LoginForm onLogin={() => setToken(localStorage.getItem('token'))} />
      </div>
    );
  }

  return (
    <Router>
      <div className="container mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">📦 Zero Mile</Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/upload">Upload Order</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/orders">View Orders</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/parcels">Parcel Summary</Link>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex">
            {token ? (
              <button className="btn btn-outline-danger" onClick={() => {
                localStorage.removeItem('token');
                setToken(null);
              }}>
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn btn-outline-primary">Login</Link>
            )}
          </div>
        </div>
      </nav>


        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/login" element={<LoginForm onLogin={() => setToken(localStorage.getItem('token'))} />} />
          <Route path="/upload" element={<UploadForm />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/parcels" element={<ParcelSummary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
