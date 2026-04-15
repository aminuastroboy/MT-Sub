import AppShell from '../../components/AppShell';
import { adminNav, transactions } from '../../components/DemoData';
import StatusBadge from '../../components/StatusBadge';

export default function AdminPage() {
  return (
    <AppShell title="Admin Dashboard" subtitle="Overview of users, revenue, plans and transaction health." navItems={adminNav} activePath="/admin">
      <div className="metric-grid">
        <div className="card metric-card"><h3>1,284</h3><p className="muted">Total Users</p></div>
        <div className="card metric-card"><h3>₦1.86M</h3><p className="muted">Revenue</p></div>
        <div className="card metric-card"><h3>₦214k</h3><p className="muted">Estimated Profit</p></div>
        <div className="card metric-card"><h3>16</h3><p className="muted">Pending Issues</p></div>
      </div>
      <div className="dashboard-grid" style={{ marginTop: '1rem' }}>
        <div className="card" style={{ padding: '1.2rem' }}>
          <h3 style={{ marginTop: 0 }}>Recent Transactions</h3>
          <div className="table-card card">
            <table>
              <thead><tr><th>ID</th><th>Type</th><th>Network</th><th>Amount</th><th>Status</th></tr></thead>
              <tbody>
                {transactions.map((item) => (
                  <tr key={item.id}><td>{item.id}</td><td>{item.type}</td><td>{item.network}</td><td>{item.amount}</td><td><StatusBadge status={item.status} /></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div className="card" style={{ padding: '1.2rem' }}>
            <h3 style={{ marginTop: 0 }}>Top Network Usage</h3>
            <ul>
              <li>MTN - 46%</li>
              <li>Airtel - 28%</li>
              <li>Glo - 18%</li>
              <li>9mobile - 8%</li>
            </ul>
          </div>
          <div className="card" style={{ padding: '1.2rem' }}>
            <h3 style={{ marginTop: 0 }}>Daily Snapshot</h3>
            <p className="muted">145 successful orders today, 6 pending and 3 failed.</p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
