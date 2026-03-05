'use client';
import { useState } from 'react';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Honey (1L)', category: 'Processed Goods', price: 8000, icon: '🍯', description: 'Pure natural farm honey, unprocessed and rich in nutrients.' },
  { id: 2, name: 'Smoked Catfish (per kg)', category: 'Processed Goods', price: 25000, icon: '🐟', description: 'Freshly smoked catfish, hygienically processed and packed.' },
  { id: 3, name: 'The Feed-Less Poultry Masterclass', category: 'Books & Ebooks', price: 3000, icon: '📘', description: 'Learn how to raise poultry with minimal feed costs.', hasFormat: true },
  { id: 4, name: 'Fresh Maize (50kg bag)', category: 'Crops', price: 15000, icon: '🌽', description: 'Freshly harvested maize, great for consumption and feed.' },
  { id: 5, name: 'Live Broiler Chicken', category: 'Livestock', price: 8500, icon: '🐔', description: 'Healthy, well-fed broiler chickens ready for purchase.' },
  { id: 6, name: 'Organic Palm Oil (5L)', category: 'Processed Goods', price: 12000, icon: '🫙', description: 'Pure organic red palm oil, unrefined and naturally processed.' },
  { id: 7, name: 'Cassava Flour (10kg)', category: 'Crops', price: 6500, icon: '🌾', description: 'High quality cassava flour, perfect for various food recipes.' },
  { id: 8, name: 'Catfish Farming Guide', category: 'Books & Ebooks', price: 2500, icon: '📗', description: 'A complete guide to starting and running a catfish farm.', hasFormat: true },
];

const categories = ['All', 'Crops', 'Livestock', 'Processed Goods', 'Books & Ebooks'];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState('');

  const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  const addToCart = (product, format = null) => {
    const item = format ? { ...product, selectedFormat: format, name: `${product.name} (${format})` } : product;
    const stored = JSON.parse(localStorage.getItem('tourms_cart') || '[]');
    stored.push({ ...item, quantity: 1 });
    localStorage.setItem('tourms_cart', JSON.stringify(stored));
    setNotification(`✅ ${item.name} added to cart!`);
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <main>
      {/* NAVBAR */}
      <nav style={{ backgroundColor: '#2d6a4f', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '1.4rem' }}>🌱 Tourms Biofarms</h1>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/shop" style={{ color: 'white', textDecoration: 'none' }}>Shop</Link>
          <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          <Link href="/cart" style={{ color: 'white', textDecoration: 'none' }}>🛒 Cart</Link>
        </div>
      </nav>

      {/* NOTIFICATION */}
      {notification && (
        <div style={{ backgroundColor: '#52b788', color: 'white', textAlign: 'center', padding: '0.8rem', fontWeight: 'bold' }}>
          {notification}
        </div>
      )}

      {/* HEADER */}
      <section style={{ backgroundColor: '#f0f7f4', padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#2d6a4f' }}>Our Products</h2>
        <p style={{ color: '#6b3f1f' }}>Fresh, quality agricultural products — Pay on Delivery</p>
      </section>

      {/* CATEGORY FILTER */}
      <section style={{ padding: '1.5rem 2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)} style={{
            padding: '0.5rem 1.2rem',
            borderRadius: '20px',
            border: '2px solid #2d6a4f',
            backgroundColor: activeCategory === cat ? '#2d6a4f' : 'white',
            color: activeCategory === cat ? 'white' : '#2d6a4f',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            {cat}
          </button>
        ))}
      </section>

      {/* PRODUCTS GRID */}
      <section style={{ padding: '1rem 2rem 4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        {filtered.map(product => (
          <div key={product.id} style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #d8f3dc', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
            <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '0.5rem' }}>{product.icon}</div>
            <h3 style={{ color: '#2d6a4f', marginBottom: '0.3rem' }}>{product.name}</h3>
            <p style={{ fontSize: '0.85rem', color: '#777', marginBottom: '0.8rem' }}>{product.description}</p>
            <p style={{ fontSize: '0.75rem', color: '#c68642', fontWeight: 'bold', marginBottom: '0.8rem' }}>📁 {product.category}</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#6b3f1f', marginBottom: '1rem' }}>₦{product.price.toLocaleString()}</p>

            {product.hasFormat ? (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => addToCart(product, 'Ebook')} style={{ flex: 1, backgroundColor: '#2d6a4f', color: 'white', border: 'none', padding: '0.6rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}>
                  📱 Ebook
                </button>
                <button onClick={() => addToCart(product, 'Physical')} style={{ flex: 1, backgroundColor: '#6b3f1f', color: 'white', border: 'none', padding: '0.6rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}>
                  📦 Physical
                </button>
              </div>
            ) : (
              <button onClick={() => addToCart(product)} style={{ width: '100%', backgroundColor: '#2d6a4f', color: 'white', border: 'none', padding: '0.7rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#2d1a0e', color: '#c68642', textAlign: 'center', padding: '1.5rem' }}>
        © 2026 Tourms Biofarms Ventures. All rights reserved.
      </footer>
    </main>
  );
}