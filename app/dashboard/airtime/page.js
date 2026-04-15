import AppShell from '../../../components/AppShell';
import { userNav } from '../../../components/DemoData';

export default function AirtimePage() {
  return (
    <AppShell title="Buy Airtime" subtitle="Recharge any supported network." navItems={userNav} activePath="/dashboard/airtime">
      <div className="split">
        <div className="card form-card">
          <label>Select Network</label>
          <select className="select"><option>MTN</option><option>Airtel</option><option>Glo</option><option>9mobile</option></select>
          <label>Phone Number</label>
          <input className="input" placeholder="0803 000 0000" />
          <label>Amount</label>
          <input className="input" placeholder="₦500" />
          <label>Purchase Type</label>
          <select className="select"><option>For myself</option><option>For another number</option></select>
          <button className="btn btn-primary">Continue</button>
        </div>
        <div className="card" style={{ padding: '1.3rem' }}>
          <h3 style={{ marginTop: 0 }}>Order Summary</h3>
          <div className="summary-list">
            <div className="summary-item"><span>Network</span><strong>MTN</strong></div>
            <div className="summary-item"><span>Recipient</span><strong>0803 000 0000</strong></div>
            <div className="summary-item"><span>Amount</span><strong>₦500</strong></div>
            <div className="summary-item"><span>Wallet After</span><strong>₦42,000</strong></div>
          </div>
          <button className="btn btn-success" style={{ marginTop: '1rem' }}>Confirm Purchase</button>
        </div>
      </div>
    </AppShell>
  );
}
