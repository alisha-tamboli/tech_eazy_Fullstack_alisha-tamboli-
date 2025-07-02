
import { useState, useEffect } from 'react';
import API from '../api';
import '../styles/OrderList.css';


export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState({ vendor: '', date: '' });

  const fetchOrders = () => {
    API.get(`/delivery-orders?vendor=${filter.vendor}&date=${filter.date}`)
      .then(res => setOrders(res.data));
  };

  return (
    <div className="container order-list">
      <div className="filters d-flex gap-2 mb-3">
        <input className="form-control" placeholder="Vendor" onChange={e => setFilter({ ...filter, vendor: e.target.value })} />
        <input className="form-control" type="date" onChange={e => setFilter({ ...filter, date: e.target.value })} />
        <button className="btn btn-primary" onClick={fetchOrders}>Filter</button>
      </div>
      <table className="table table-bordered shadow">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vendor</th>
            <th>Date</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.vendorName}</td>
              <td>{o.orderDate}</td>
              <td><a href={`http://localhost:5000/${o.file}`} target="_blank" rel="noreferrer">Download</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
