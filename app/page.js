import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <nav style={{
        backgroundColor: '#2d6a4f',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ color: 'white', fontSize: '1.4rem' }}>🌱 Tourms Biofarms</h1>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/shop" style={{ color: 'white', textDecoration: 'none' }}>Shop</Link>
          <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          <Link href="/cart" style={{ color: 'white', textDecoration: 'none' }}>🛒 Cart</Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        backgroundColor: '#2d6a4f',
        color: 'white',
        textAlign: 'center',
        padding: '5rem 2rem'
      }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Fresh From the Farm</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#b7e4c7' }}>
          Quality crops, livestock, processed goods & farming knowledge — delivered to your door.
        </p>
        <Link href="/shop" style={{
          backgroundColor: '#6b3f1f',
          color: 'white',
          padding: '0.8rem 2rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1.1rem'
        }}>
          Shop Now
        </Link>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '2rem', color: '#2d6a4f', marginBottom: '2rem' }}>What We Offer</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {[
            { icon: '🌾', label: 'Crops' },
            { icon: '🐄', label: 'Livestock' },
            { icon: '🥫', label: 'Processed Goods' },
            { icon: '📚', label: 'Books & Ebooks' },
          ].map((cat) => (
            <div key={cat.label} style={{
              backgroundColor: 'white',
              border: '2px solid #52b788',
              borderRadius: '12px',
              padding: '2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#2d6a4f'
            }}>
              <div style={{ fontSize: '2.5rem' }}>{cat.icon}</div>
              <div style={{ marginTop: '0.5rem' }}>{cat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST BANNER */}
      <section style={{
        backgroundColor: '#6b3f1f',
        color: 'white',
        textAlign: 'center',
        padding: '3rem 2rem'
      }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Why Shop With Us?</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div>✅ 100% Farm Fresh</div>
          <div>✅ Pay On Delivery</div>
          <div>✅ Verified Products</div>
          <div>✅ Nationwide Delivery</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: '#2d1a0e',
        color: '#c68642',
        textAlign: 'center',
        padding: '1.5rem'
      }}>
        © 2026 Tourms Biofarms Ventures. All rights reserved.
      </footer>
    </main>
  );
}