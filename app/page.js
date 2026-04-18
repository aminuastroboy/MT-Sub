import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';

const stats = [
  ['4 Networks', 'MTN, Airtel, Glo and 9mobile supported'],
  ['24/7 Access', 'Users can buy whenever they need to'],
  ['Wallet System', 'Fast prepaid checkout for repeat users'],
  ['Admin Control', 'Manage plans, pricing and transactions']
];

const features = [
  {
    title: 'Fast Airtime Purchase',
    text: 'Users choose a network, enter a phone number, enter an amount and complete checkout in seconds.'
  },
  {
    title: 'Data Bundle Ordering',
    text: 'Serve SME, gifting or corporate data plans with clear pricing and a simple purchase flow.'
  },
  {
    title: 'Admin Dashboard',
    text: 'Track users, update rates, review orders and keep the platform running smoothly from one panel.'
  }
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">MT-Sub by Musatech Solutions Ltd</span>
            <h1>Fast data and airtime top-up frontend ready for launch.</h1>
            <p>
              This Vercel-ready demo gives MT-Sub a trust-focused homepage, smooth user dashboard,
              airtime and data purchase pages, wallet history, transaction tracking and an admin console.
            </p>
            <div className="hero-actions">
              <Link href="/register" className="btn btn-primary">Create Account</Link>
              <Link href="/dashboard" className="btn btn-outline">View User Dashboard</Link>
              <Link href="/admin" className="btn btn-success">View Admin Panel</Link>
            </div>
          </div>

          <div className="card preview-card">
            <div className="preview-top">
              <div className="preview-chip"><strong>₦42,500</strong><br /><span className="muted">Wallet balance</span></div>
              <div className="preview-chip"><strong>84</strong><br /><span className="muted">Orders this week</span></div>
              <div className="preview-chip"><strong>98.6%</strong><br /><span className="muted">Success rate</span></div>
            </div>
            <div className="preview-panel">
              <strong>Quick Actions</strong>
              <div className="quick-grid" style={{ marginTop: '1rem' }}>
                <div className="quick-card card">Buy Airtime</div>
                <div className="quick-card card">Buy Data</div>
                <div className="quick-card card">Fund Wallet</div>
                <div className="quick-card card">View History</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Built for the Nigerian VTU market</h2>
          <p className="section-sub">Clean fintech styling, mobile-friendly layout and pages already structured for future API integration.</p>
          <div className="stats-grid">
            {stats.map(([title, text]) => (
              <div className="card stat-card" key={title}>
                <h3>{title}</h3>
                <p className="muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Main frontend modules</h2>
          <p className="section-sub">Everything here is arranged for a realistic MVP demo on Vercel.</p>
          <div className="feature-grid">
            {features.map((feature) => (
              <div className="card feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p className="muted">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card" style={{ padding: '1.5rem' }}>
          <h2 className="section-title" style={{ marginTop: 0 }}>Included demo pages</h2>
          <div className="quick-grid">
            <Link className="quick-card card" href="/login">Login</Link>
            <Link className="quick-card card" href="/register">Register</Link>
            <Link className="quick-card card" href="/dashboard/airtime">Buy Airtime</Link>
            <Link className="quick-card card" href="/dashboard/data">Buy Data</Link>
            <Link className="quick-card card" href="/dashboard/wallet">Wallet</Link>
            <Link className="quick-card card" href="/dashboard/transactions">Transactions</Link>
            <Link className="quick-card card" href="/admin/plans">Admin Data Plans</Link>
            <Link className="quick-card card" href="/admin/pricing">Admin Pricing</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
