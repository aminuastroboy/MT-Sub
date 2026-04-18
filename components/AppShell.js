import Link from 'next/link';

export default function AppShell({ title, subtitle, navItems, activePath, actions, children }) {
  return (
    <div className="page-grid">
      <aside className="sidebar">
        <Link href="/" className="brand">
          <span className="brand-badge">MT</span>
          <span>
            <div>MT-Sub</div>
            <small style={{ color: '#94a3b8' }}>Reseller Platform</small>
          </span>
        </Link>
        <nav className="side-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`side-link ${activePath === item.href ? 'active' : ''}`}>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="main-area">
        <div className="panel-header">
          <div>
            <h1 style={{ margin: 0 }}>{title}</h1>
            <p className="muted" style={{ marginBottom: 0 }}>{subtitle}</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>{actions}</div>
        </div>
        {children}
      </main>
    </div>
  );
}
