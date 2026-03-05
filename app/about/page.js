import Link from 'next/link';

export default function About() {
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

      {/* HERO */}
      <section style={{ backgroundColor: '#2d6a4f', color: 'white', textAlign: 'center', padding: '4rem 2rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Tourms Biofarms Ventures</h2>
        <p style={{ fontSize: '1.1rem', color: '#b7e4c7', maxWidth: '600px', margin: '0 auto' }}>
          Rooted in the soil. Committed to quality. Dedicated to feeding and educating Nigeria.
        </p>
      </section>

      {/* STORY */}
      <section style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem' }}>
        <h3 style={{ color: '#2d6a4f', fontSize: '1.8rem', marginBottom: '1rem' }}>Our Story</h3>
        <p style={{ color: '#444', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
          Tourms Biofarms Ventures was founded with a simple but powerful mission — to bridge the gap between the farm and the consumer. We believe every Nigerian deserves access to fresh, natural, and affordable agricultural products.
        </p>
        <p style={{ color: '#444', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
          From our farms to your doorstep, we handle everything with care — whether it is fresh crops, healthy livestock, processed farm products, or knowledge resources to help you start your own farming journey.
        </p>
        <p style={{ color: '#444', lineHeight: '1.8', fontSize: '1.05rem' }}>
          We operate on a simple principle: transparency. That is why we collect payment strictly on delivery — no hidden charges, no online risks. What you see is what you get.
        </p>
      </section>

      {/* VALUES */}
      <section style={{ backgroundColor: '#f0f7f4', padding: '4rem 2rem', textAlign: 'center' }}>
        <h3 style={{ color: '#2d6a4f', fontSize: '1.8rem', marginBottom: '2rem' }}>Our Values</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          {[
            { icon: '🌱', title: 'Natural', desc: 'All our products are farm-fresh and naturally grown.' },
            { icon: '🤝', title: 'Transparent', desc: 'Payment on delivery. No surprises, no hidden fees.' },
            { icon: '📦', title: 'Reliable', desc: 'We deliver what we promise, when we promise it.' },
            { icon: '📚', title: 'Educational', desc: 'We share knowledge to grow the farming community.' },
          ].map(val => (
            <div key={val.title} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>{val.icon}</div>
              <h4 style={{ color: '#2d6a4f', marginBottom: '0.5rem' }}>{val.title}</h4>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', textAlign: 'center' }}>
        <h3 style={{ color: '#2d6a4f', fontSize: '1.8rem', marginBottom: '1rem' }}>Get In Touch</h3>
        <p style={{ color: '#555', marginBottom: '2rem' }}>Have questions about an order or product? We are always happy to help.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#f0f7f4', borderRadius: '12px', padding: '1.5rem 2rem' }}>
            <p style={{ color: '#2d6a4f', fontWeight: 'bold', marginBottom: '0.3rem' }}>Phone / WhatsApp</p>
            <p style={{ color: '#444' }}>+234 8079 8658 44</p>
          </div>
          <div style={{ backgroundColor: '#f0f7f4', borderRadius: '12px', padding: '1.5rem 2rem' }}>
            <p style={{ color: '#2d6a4f', fontWeight: 'bold', marginBottom: '0.3rem' }}>Email</p>
            <p style={{ color: '#444' }}>info@tourmsbiofarms.com</p>
          </div>
          <div style={{ backgroundColor: '#f0f7f4', borderRadius: '12px', padding: '1.5rem 2rem' }}>
            <p style={{ color: '#2d6a4f', fontWeight: 'bold', marginBottom: '0.3rem' }}>Location</p>
            <p style={{ color: '#444' }}>Nigeria</p>
          </div>
        </div>
        <Link href="/shop" style={{ backgroundColor: '#2d6a4f', color: 'white', padding: '0.8rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
          Start Shopping
        </Link>
      </section>

      <footer style={{ backgroundColor: '#2d1a0e', color: '#c68642', textAlign: 'center', padding: '1.5rem', marginTop: '2rem' }}>
        2026 Tourms Biofarms Ventures. All rights reserved.
      </footer>
    </main>
  );
}