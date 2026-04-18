import AppShell from '../../../components/AppShell';
import { userNav } from '../../../components/DemoData';

export default function WalletPage() {
  return (
    <AppShell title="Wallet" subtitle="Track balance and funding records." navItems={userNav} activePath="/dashboard/wallet">
      <div className="dashboard-grid">
        <div className="card" style={{ padding: '1.3rem' }}>
          <h3 style={{ marginTop: 0 }}>Wallet Overview</h3>
          <div className="metric-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="card metric-card"><h3>₦42,500</h3><p className="muted">Current Balance</p></div>
            <div className="card metric-card"><h3>₦85,000</h3><p className="muted">Total Funded</p></div>
            <div className="card metric-card"><h3>₦39,500</h3><p className="muted">Total Spent</p></div>
          </div>
          <div className="table-card card" style={{ marginTop: '1rem' }}>
            <table>
              <thead><tr><th>Date</th><th>Method</th><th>Amount</th><th>Status</th></tr></thead>
              <tbody>
                <tr><td>Apr 15, 2026</td><td>Bank Transfer</td><td>₦10,000</td><td>Approved</td></tr>
                <tr><td>Apr 10, 2026</td><td>Manual Funding</td><td>₦5,000</td><td>Approved</td></tr>
                <tr><td>Apr 03, 2026</td><td>Bank Transfer</td><td>₦20,000</td><td>Pending</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card form-card">
          <h3 style={{ marginTop: 0 }}>Manual Funding Instruction</h3>
          <p className="muted">Use this section as a temporary wallet funding guide before payment gateway integration.</p>
          <div className="summary-list">
            <div className="summary-item"><span>Bank</span><strong>Demo Bank</strong></div>
            <div className="summary-item"><span>Account Name</span><strong>Musatech Solutions Ltd</strong></div>
            <div className="summary-item"><span>Account Number</span><strong>0123456789</strong></div>
          </div>
          <label>Funding Amount</label>
          <input className="input" placeholder="₦5,000" />
          <button className="btn btn-primary">Submit Funding Request</button>
        </div>
      </div>
    </AppShell>
  );
}
