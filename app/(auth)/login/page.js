import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="auth-shell">
      <div className="auth-head">
        <div className="brand-row">
          <div className="logo-mark">M</div>
          <div>
            <p className="kicker">Welcome back</p>
            <h1 className="page-title">Login to MT-Sub</h1>
          </div>
        </div>
      </div>

      <section className="auth-card card">
        <label>Email or username</label>
        <input className="input" placeholder="you@example.com" />
        <label>Password</label>
        <input className="input" type="password" placeholder="••••••••" />
        <Link href="/app" className="btn btn-primary" style={{ display: 'block', textAlign: 'center' }}>Login</Link>
        <div className="auth-links">
          New here? <Link href="/register" style={{ color: 'var(--primary)', fontWeight: 700 }}>Create account</Link>
        </div>
      </section>
    </main>
  );
}
