'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tourms_cart') || '[]');
    setCartItems(stored);
  }, []);

  const updateQuantity = (index, delta) => {
    const updated = [...cartItems];
    updated[index].quantity = Math.max(1, updated[index].quantity + delta);
    setCartItems(updated);
    localStorage.setItem('tourms_cart', JSON.stringify(updated));
  };

  const removeItem = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
    localStorage.setItem('tourms_cart', JSON.stringify(updated));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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

      <section style={{ maxWidth: '800px', margin: '3rem auto', padding: '0 2rem' }}>
        <h2 style={{ color: '#2d6a4f', fontSize: '2rem', marginBottom: '2rem' }}>Your Cart</h2>

        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem' }}>
            <p style={{ fontSize: '1.2rem', color: '#777', marginBottom: '1.5rem' }}>Your cart is empty.</p>
            <Link href="/shop" style={{ backgroundColor: '#2d6a4f', color: 'white', padding: '0.8rem 2rem', borderRadius: '8px', textDecoration: 'none' }}>
              Browse Products
            </Link>
          </div>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', border: '1px solid #d8f3dc', borderRadius: '10px', padding: '1rem 1.5rem', marginBottom: '1rem' }}>
                <div>
                  <p style={{ fontWeight: 'bold', color: '#2d6a4f' }}>{item.name}</p>
                  <p style={{ color: '#6b3f1f', fontWeight: 'bold' }}>N{item.price.toLocaleString()}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <button onClick={() => updateQuantity(index, -1)} style={{ width: '30px', height: '30px', borderRadius: '50%', border: '2px solid #2d6a4f', backgroundColor: 'white', color: '#2d6a4f', fontWeight: 'bold', cursor: 'pointer' }}>-</button>
                  <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                  <button onClick={() => updateQuantity(index, 1)} style={{ width: '30px', height: '30px', borderRadius: '50%', border: '2px solid #2d6a4f', backgroundColor: '#2d6a4f', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>+</button>
                  <button onClick={() => removeItem(index)} style={{ marginLeft: '0.5rem', backgroundColor: '#ffe0e0', border: 'none', color: '#c0392b', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Remove</button>
                </div>
              </div>
            ))}

            <div style={{ backgroundColor: '#f0f7f4', borderRadius: '12px', padding: '1.5rem', marginTop: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: 'bold', color: '#2d1a0e', marginBottom: '1.5rem' }}>
                <span>Total:</span>
                <span style={{ color: '#6b3f1f' }}>N{total.toLocaleString()}</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1.5rem' }}>Payment is made on delivery - no online payment required.</p>
              <Link href="/checkout" style={{ display: 'block', textAlign: 'center', backgroundColor: '#2d6a4f', color: 'white', padding: '1rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </section>

      <footer style={{ backgroundColor: '#2d1a0e', color: '#c68642', textAlign: 'center', padding: '1.5rem', marginTop: '4rem' }}>
        2026 Tourms Biofarms Ventures. All rights reserved.
      </footer>
    </main>
  );
}