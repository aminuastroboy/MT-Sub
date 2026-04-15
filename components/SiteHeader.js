import Link from 'next/link';

export default function SiteHeader() {
  return (
    <div className="topbar">
      <div className="container nav">
        <Link href="/" className="brand">
          <span className="brand-badge">MT</span>
          <span>
            <div>MT-Sub</div>
            <small className="muted">Musatech Solutions Ltd</small>
          </span>
        </Link>

        <div className="nav-links">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/pricing">Pricing</Link>
          <Link className="nav-link" href="/about">About</Link>
          <Link className="nav-link" href="/contact">Contact</Link>
        </div>

        <div className="nav-actions">
          <Link className="btn btn-outline" href="/login">Login</Link>
          <Link className="btn btn-primary" href="/register">Get Started</Link>
        </div>
      </div>
    </div>
  );
}
