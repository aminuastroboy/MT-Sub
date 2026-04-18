import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="auth-wrap">
      <div className="auth-hero">
        <div>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '.8rem' }}>Start selling faster with MT-Sub.</h2>
          <p>Create a customer account, fund a wallet and start ordering airtime or data bundles in a few taps.</p>
        </div>
      </div>
      <div className="auth-panel">
        <div className="card auth-box">
          <div className="brand" style={{ marginBottom: '1rem' }}>
            <span className="brand-badge">MT</span>
            <span>MT-Sub</span>
          </div>
          <h1>Create account</h1>
          <p className="muted">Registration form scaffold for the frontend demo.</p>
          <label>Full Name</label>
          <input className="input" placeholder="Enter full name" />
          <label>Phone Number</label>
          <input className="input" placeholder="0803 000 0000" />
          <label>Email</label>
          <input className="input" placeholder="you@example.com" />
          <label>Password</label>
          <input className="input" type="password" placeholder="Create password" />
          <Link className="btn btn-primary" href="/dashboard">Create Account</Link>
          <p className="muted">Already registered? <Link href="/login">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
}
