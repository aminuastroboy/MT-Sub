import AppShell from '../../../components/AppShell';
import { userNav } from '../../../components/DemoData';

export default function DataPage() {
  return (
    <AppShell title="Buy Data" subtitle="Select a network and data bundle." navItems={userNav} activePath="/dashboard/data">
      <div className="split">
        <div className="card form-card">
          <label>Select Network</label>
          <select className="select"><option>MTN</option><option>Airtel</option><option>Glo</option><option>9mobile</option></select>
          <label>Select Plan</label>
          <select className="select"><option>1GB SME - ₦700</option><option>2GB Gifting - ₦1,300</option><option>3GB Corporate - ₦1,700</option></select>
          <label>Phone Number</label>
          <input className="input" placeholder="0803 000 0000" />
          <button className="btn btn-primary">Continue</button>
        </div>
        <div className="card" style={{ padding: '1.3rem' }}>
          <h3 style={{ marginTop: 0 }}>Bundle Summary</h3>
          <div className="summary-list">
            <div className="summary-item"><span>Network</span><strong>MTN</strong></div>
            <div className="summary-item"><span>Plan</span><strong>1GB SME</strong></div>
            <div className="summary-item"><span>Duration</span><strong>30 Days</strong></div>
            <div className="summary-item"><span>Amount</span><strong>₦700</strong></div>
          </div>
          <button className="btn btn-success" style={{ marginTop: '1rem' }}>Confirm Purchase</button>
        </div>
      </div>
    </AppShell>
  );
}
