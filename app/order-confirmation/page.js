'use client';
import Link from 'next/link';

export default function OrderConfirmation() {
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

      <section style={{ maxWidth: '600px', margin: '5rem auto', padding: '0 2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>✅</div>
        <h2 style={{ color: '#2d6a4f', fontSize: '2rem', marginBottom: '1rem' }}>Order Placed Successfully!</h2>
        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1rem' }}>
          Thank you for shopping with Tourms Biofarms Ventures.
        </p>
        <p style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem' }}>
          Our team will contact you shortly to confirm your order and arrange delivery. Payment will be collected upon delivery.
        </p>

        <div style={{ backgroundColor: '#fff8e1', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem', textAlign: 'left' }}>
          <h3 style={{ color: '#6b3f1f', marginBottom: '0.8rem' }}>What happens next?</h3>
          <p style={{ marginBottom: '0.5rem' }}>1. We review your order</p>
          <p style={{ marginBottom: '0.5rem' }}>2. We call or message you to confirm</p>
          <p style={{ marginBottom: '0.5rem' }}>3. We arrange delivery to your address</p>
          <p>4. You pay on delivery</p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/shop" style={{ backgroundColor: '#2d6a4f', color: 'white', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
            Continue Shopping
          </Link>
          <Link href="/" style={{ backgroundColor: '#6b3f1f', color: 'white', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
            Back to Home
          </Link>
        </div>
      </section>

      <footer style={{ backgroundColor: '#2d1a0e', color: '#c68642', textAlign: 'center', padding: '1.5rem', marginTop: '4rem' }}>
        2026 Tourms Biofarms Ventures. All rights reserved.
      </footer>
    </main>
  );
}