import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import UploadForm from './components/UploadForm';
import OrderList from './components/OrderList';
import ParcelSummary from './components/ParcelSummary';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <div className="container mt-3">
        <Navbar token={token} setToken={setToken} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              token ? <Navigate to="/" /> : <LoginForm onLogin={() => setToken(localStorage.getItem('token'))} />
            }
          />
          {token && (
            <>
              <Route path="/upload" element={<UploadForm />} />
              <Route path="/orders" element={<OrderList />} />
              <Route path="/parcels" element={<ParcelSummary />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

// ✅ Navbar Component (Dynamic)
function Navbar({ token, setToken }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">📦 Zero Mile</Link>
        <ul className="navbar-nav me-auto">
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
            <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
          ) : (
            <Link className="btn btn-outline-primary" to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default App;
