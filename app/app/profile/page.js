import Link from 'next/link';
import AppFrame from '@/components/AppFrame';
import AppHeader from '@/components/AppHeader';

export default function ProfilePage() {
  return (
    <AppFrame current="/app/profile">
      <AppHeader title="Profile" subtitle="Your account details and quick access settings." />

      <section className="section profile-list">
        <div className="mini-card card">
          <div className="small-muted">Full name</div>
          <div style={{ fontWeight: 800, marginTop: '.25rem' }}>Aminu Musa</div>
        </div>
        <div className="mini-card card">
          <div className="small-muted">Phone number</div>
          <div style={{ fontWeight: 800, marginTop: '.25rem' }}>0706 241 3355</div>
        </div>
        <div className="mini-card card">
          <div className="small-muted">Email</div>
          <div style={{ fontWeight: 800, marginTop: '.25rem' }}>aminu@example.com</div>
        </div>
      </section>

      <section className="section action-grid">
        <Link href="/app/wallet" className="btn btn-soft" style={{ textAlign: 'center' }}>Wallet</Link>
        <Link href="/login" className="btn btn-ghost" style={{ textAlign: 'center' }}>Logout</Link>
      </section>
    </AppFrame>
  );
}
