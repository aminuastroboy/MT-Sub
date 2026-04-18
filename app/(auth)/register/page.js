import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="auth-shell">
      <div className="auth-head">
        <div className="brand-row">
          <div className="logo-mark">M</div>
          <div>
            <p className="kicker">Get started</p>
            <h1 className="page-title">Create your MT-Sub account</h1>
          </div>
        </div>
      </div>

      <section className="auth-card card">
        <label>Full name</label>
        <input className="input" placeholder="Aminu Musa" />
        <label>Phone number</label>
        <input className="input" placeholder="0803 000 0000" />
        <label>Email</label>
        <input className="input" placeholder="you@example.com" />
        <label>Password</label>
        <input className="input" type="password" placeholder="Create password" />
        <Link href="/app" className="btn btn-primary" style={{ display: 'block', textAlign: 'center' }}>Create account</Link>
        <div className="auth-links">
          Already have an account? <Link href="/login" style={{ color: 'var(--primary)', fontWeight: 700 }}>Login</Link>
        </div>
      </section>
    </main>
  );
}
