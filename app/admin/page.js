'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const ADMIN_PASSWORD = 'tourms2026';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('orders');

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      const stored = JSON.parse(localStorage.getItem('tourms_orders') || '[]');
      setOrders(stored);
    } else {
      alert('Incorrect password. Try again.');
    }
  };

  const updateStatus = (index, status) => {
    const updated = [...orders];
    updated[index].status = status;
    setOrders(updated);
    localStorage.setItem('tourms_orders', JSON.stringify(updated));
  };

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const pending = orders.filter(o => o.status === 'Pending').length;
  const delivered = orders.filter(o => o.status === 'Delivered').length;

  if (!loggedIn) {
    return (
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f9f5f0' }}>
        <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', textAlign: 'center', width: '360px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌱</div>
          <h2 style={{ color: '#2d6a4f', marginBottom: '0.5rem' }}>Admin Dashboard</h2>
          <p style={{ color: '#777', marginBottom: '2rem', fontSize: '0.9rem' }}>Tourms Biofarms Ventures</p>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem', marginBottom: '1rem' }}
          />
          <button
            onClick={handleLogin}
            style={{ width: '100%', backgroundColor: '#2d6a4f', color: 'white', border: 'none', padding: '0.8rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
          >
            Login
          </button>
        </div>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: '#f9f5f0', minHeight: '100vh' }}>
      <nav style={{ backgroundColor: '#2d6a4f', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '1.4rem' }}>Tourms Biofarms — Admin</h1>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>View Site</Link>
          <button onClick={() => setLoggedIn(false)} style={{ color: 'white', background: 'none', border: '1px solid white', padding: '0.3rem 0.8rem', borderRadius: '6px', cursor: 'pointer' }}>Logout</button>
        </div>
      </nav>

      <section style={{ maxWidth: '1100px', margin: '2rem auto', padding: '0 2rem' }}>

        {/* STATS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { label: 'Total Orders', value: orders.length, color: '#2d6a4f' },
            { label: 'Pending Orders', value: pending, color: '#e67e22' },
            { label: 'Delivered', value: delivered, color: '#27ae60' },
            { label: 'Total Revenue', value: 'N' + totalRevenue.toLocaleString(), color: '#6b3f1f' },
          ].map(stat => (
            <div key={stat.label} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <p style={{ color: '#777', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{stat.label}</p>
              <p style={{ color: stat.color, fontSize: '2rem', fontWeight: 'bold' }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* TABS */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          {['orders'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '0.5rem 1.5rem', borderRadius: '20px', border: '2px solid #2d6a4f', backgroundColor: activeTab === tab ? '#2d6a4f' : 'white', color: activeTab === tab ? 'white' : '#2d6a4f', fontWeight: 'bold', cursor: 'pointer', textTransform: 'capitalize' }}>
              {tab}
            </button>
          ))}
        </div>

        {/* ORDERS TABLE */}
        {orders.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', backgroundColor: 'white', borderRadius: '12px' }}>
            <p style={{ color: '#777', fontSize: '1.2rem' }}>No orders yet. Share your website to start receiving orders!</p>
          </div>
        ) : (
          orders.map((order, index) => (
            <div key={order.id} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '1.5rem', marginBottom: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ color: '#2d6a4f', marginBottom: '0.2rem' }}>Order #{order.id}</h3>
                  <p style={{ color: '#777', fontSize: '0.85rem' }}>{order.date}</p>
                </div>
                <select
                  value={order.status}
                  onChange={(e) => updateStatus(index, e.target.value)}
                  style={{ padding: '0.4rem 0.8rem', borderRadius: '8px', border: '2px solid #2d6a4f', color: '#2d6a4f', fontWeight: 'bold', cursor: 'pointer' }}
                >
                  <option>Pending</option>
                  <option>Confirmed</option>
                  <option>Out for Delivery</option>
                  <option>Delivered</option>
                  <option>Cancelled</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ backgroundColor: '#f9f5f0', borderRadius: '8px', padding: '1rem' }}>
                  <h4 style={{ color: '#6b3f1f', marginBottom: '0.5rem' }}>Customer Details</h4>
                  <p><strong>Name:</strong> {order.customer.name}</p>
                  <p><strong>Phone:</strong> {order.customer.phone}</p>
                  <p><strong>Email:</strong> {order.customer.email || 'N/A'}</p>
                  <p><strong>Address:</strong> {order.customer.address}</p>
                  <p><strong>City:</strong> {order.customer.city}</p>
                  {order.customer.note && <p><strong>Note:</strong> {order.customer.note}</p>}
                </div>
                <div style={{ backgroundColor: '#f9f5f0', borderRadius: '8px', padding: '1rem' }}>
                  <h4 style={{ color: '#6b3f1f', marginBottom: '0.5rem' }}>Items Ordered</h4>
                  {order.items.map((item, i) => (
                    <p key={i}>{item.name} x{item.quantity} — N{(item.price * item.quantity).toLocaleString()}</p>
                  ))}
                  <p style={{ marginTop: '0.8rem', fontWeight: 'bold', color: '#2d6a4f' }}>Total: N{order.total.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
}