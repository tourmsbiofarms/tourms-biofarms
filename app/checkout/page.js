'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

export default function Checkout() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', city: '', note: '' });
  const [placing, setPlacing] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tourms_cart') || '[]');
    setCartItems(stored);
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.address || !form.city) {
      alert('Please fill in all required fields.');
      return;
    }
    setPlacing(true);
    const order = {
      id: Date.now(),
      customer: form,
      items: cartItems,
      total,
      status: 'Pending',
      date: new Date().toLocaleString()
    };
    const orders = JSON.parse(localStorage.getItem('tourms_orders') || '[]');
    orders.push(order);
    localStorage.setItem('tourms_orders', JSON.stringify(orders));

    const itemsList = cartItems.map(item => `${item.name} x${item.quantity} - N${(item.price * item.quantity).toLocaleString()}`).join('\n');

    try {
      const response = await emailjs.send(
        'service_btd72gv',
        'template_nd8923b',
        {
          order_id: order.id,
          date: order.date,
          customer_name: form.name,
          customer_phone: form.phone,
          customer_email: form.email || 'N/A',
          customer_address: form.address,
          customer_city: form.city,
          items: itemsList,
          total: total.toLocaleString(),
          note: form.note || 'None',
        },
        '1QtV1J7lZ26Tymmiw'
      );
      console.log('Email sent successfully:', response);
    } catch (error) {
      console.error('Email error:', error);
    }

    localStorage.removeItem('tourms_cart');
    setPlacing(false);
    router.push('/order-confirmation');
  };

  return (
    <main>
      <nav style={{ backgroundColor: '#2d6a4f', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '1.4rem' }}>Tourms Biofarms</h1>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/shop" style={{ color: 'white', textDecoration: 'none' }}>Shop</Link>
          <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          <Link href="/cart" style={{ color: 'white', textDecoration: 'none' }}>Cart</Link>
        </div>
      </nav>

      <section style={{ maxWidth: '900px', margin: '3rem auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div>
          <h2 style={{ color: '#2d6a4f', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Delivery Details</h2>
          {[
            { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'e.g. John Doe' },
            { label: 'Phone Number *', name: 'phone', type: 'tel', placeholder: 'e.g. 08012345678' },
            { label: 'Email Address', name: 'email', type: 'email', placeholder: 'e.g. john@email.com' },
            { label: 'Delivery Address *', name: 'address', type: 'text', placeholder: 'Street address' },
            { label: 'City / Town *', name: 'city', type: 'text', placeholder: 'e.g. Lagos' },
          ].map(field => (
            <div key={field.name} style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontWeight: 'bold', color: '#2d6a4f', marginBottom: '0.3rem' }}>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={form[field.name]}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}
              />
            </div>
          ))}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontWeight: 'bold', color: '#2d6a4f', marginBottom: '0.3rem' }}>Additional Notes</label>
            <textarea
              name="note"
              placeholder="Any special instructions for your order..."
              value={form.note}
              onChange={handleChange}
              rows={3}
              style={{ width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}
            />
          </div>
        </div>

        <div>
          <h2 style={{ color: '#2d6a4f', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Order Summary</h2>
          <div style={{ backgroundColor: 'white', border: '1px solid #d8f3dc', borderRadius: '12px', padding: '1.5rem' }}>
            {cartItems.length === 0 ? (
              <p style={{ color: '#777' }}>No items in cart.</p>
            ) : (
              cartItems.map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', paddingBottom: '0.8rem', borderBottom: '1px solid #f0f0f0' }}>
                  <span style={{ color: '#2d1a0e' }}>{item.name} x{item.quantity}</span>
                  <span style={{ fontWeight: 'bold', color: '#6b3f1f' }}>N{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold', marginTop: '1rem', paddingTop: '1rem', borderTop: '2px solid #2d6a4f' }}>
              <span>Total:</span>
              <span style={{ color: '#6b3f1f' }}>N{total.toLocaleString()}</span>
            </div>
            <div style={{ backgroundColor: '#fff8e1', borderRadius: '8px', padding: '1rem', marginTop: '1.5rem', fontSize: '0.9rem', color: '#6b3f1f' }}>
              <strong>Payment on Delivery</strong><br/>
              You will pay when your order is delivered. No online payment required.
            </div>
            <button
              onClick={handleSubmit}
              disabled={placing}
              style={{ width: '100%', backgroundColor: placing ? '#999' : '#2d6a4f', color: 'white', border: 'none', padding: '1rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', cursor: placing ? 'not-allowed' : 'pointer', marginTop: '1.5rem' }}
            >
              {placing ? 'Placing Order...' : 'Place Order'}
            </button>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: '#2d1a0e', color: '#c68642', textAlign: 'center', padding: '1.5rem', marginTop: '4rem' }}>
        2026 Tourms Biofarms Ventures. All rights reserved.
      </footer>
    </main>
  );
}