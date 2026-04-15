import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="auth-wrap">
      <div className="auth-panel">
        <div className="card auth-box">
          <div className="brand" style={{ marginBottom: '1rem' }}>
            <span className="brand-badge">MT</span>
            <span>MT-Sub</span>
          </div>
          <h1>Welcome back</h1>
          <p className="muted">Sign in to continue to your reseller dashboard.</p>
          <label>Email or Username</label>
          <input className="input" placeholder="Enter email or username" />
          <label>Password</label>
          <input className="input" type="password" placeholder="Enter password" />
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" href="/dashboard">Login as User</Link>
            <Link className="btn btn-outline" href="/admin">Admin Demo</Link>
          </div>
          <p className="muted">No account? <Link href="/register">Create one</Link></p>
        </div>
      </div>
      <div className="auth-hero">
        <div>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '.8rem' }}>Buy data and airtime with speed.</h2>
          <p>Frontend demo for Vercel hosting with dashboard pages already connected through a simple navigation flow.</p>
        </div>
      </div>
    </div>
  );
}
