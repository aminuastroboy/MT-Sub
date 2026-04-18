import Link from 'next/link';
import AppShell from '../../components/AppShell';
import { transactions, userNav } from '../../components/DemoData';
import StatusBadge from '../../components/StatusBadge';

export default function DashboardPage() {
  return (
    <AppShell
      title="User Dashboard"
      subtitle="Monitor wallet balance, quick actions and recent activity."
      navItems={userNav}
      activePath="/dashboard"
      actions={<>
        <Link href="/dashboard/wallet" className="btn btn-outline">Fund Wallet</Link>
        <Link href="/dashboard/data" className="btn btn-primary">Buy Data</Link>
      </>}
    >
      <div className="metric-grid">
        <div className="card metric-card"><h3>₦42,500</h3><p className="muted">Available Wallet</p></div>
        <div className="card metric-card"><h3>128</h3><p className="muted">Total Orders</p></div>
        <div className="card metric-card"><h3>121</h3><p className="muted">Successful</p></div>
        <div className="card metric-card"><h3>₦9,850</h3><p className="muted">Total Spent This Month</p></div>
      </div>

      <div className="dashboard-grid" style={{ marginTop: '1rem' }}>
        <div className="card" style={{ padding: '1.2rem' }}>
          <h3 style={{ marginTop: 0 }}>Quick Actions</h3>
          <div className="quick-grid">
            <Link className="quick-card card" href="/dashboard/airtime">Buy Airtime</Link>
            <Link className="quick-card card" href="/dashboard/data">Buy Data</Link>
            <Link className="quick-card card" href="/dashboard/wallet">Wallet</Link>
            <Link className="quick-card card" href="/dashboard/transactions">History</Link>
          </div>

          <h3>Recent Transactions</h3>
          <div className="table-card card">
            <table>
              <thead><tr><th>ID</th><th>Type</th><th>Network</th><th>Amount</th><th>Status</th></tr></thead>
              <tbody>
                {transactions.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td><td>{item.type}</td><td>{item.network}</td><td>{item.amount}</td><td><StatusBadge status={item.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          <div className="card" style={{ padding: '1.2rem' }}>
            <h3 style={{ marginTop: 0 }}>Network Shortcuts</h3>
            <div className="network-row">
              {['MTN', 'Airtel', 'Glo', '9mobile'].map((net) => (
                <div className="network-card card" key={net}><strong>{net}</strong><span className="muted">Service active</span></div>
              ))}
            </div>
          </div>
          <div className="card" style={{ padding: '1.2rem' }}>
            <h3 style={{ marginTop: 0 }}>Activity Summary</h3>
            <p className="muted">Your most recent activity is displayed here while backend integration is pending.</p>
            <ul>
              <li>Last purchase: MTN 1GB SME</li>
              <li>Last wallet top-up: ₦10,000</li>
              <li>Last login: Today, 10:14 AM</li>
            </ul>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
