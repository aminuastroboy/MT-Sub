import AppFrame from '@/components/AppFrame';
import AppHeader from '@/components/AppHeader';

export default function DataPage() {
  return (
    <AppFrame current="/app/data">
      <AppHeader title="Buy Data" subtitle="Pick a network, enter a number and choose a bundle." />

      <section className="section form-card card">
        <label>Network</label>
        <select className="select" defaultValue="">
          <option value="" disabled>Select network</option>
          <option>MTN</option>
          <option>Airtel</option>
          <option>Glo</option>
          <option>9mobile</option>
        </select>

        <label>Phone number</label>
        <input className="input" placeholder="0803 123 4567" />

        <label>Data bundle</label>
        <select className="select" defaultValue="">
          <option value="" disabled>Select plan</option>
          <option>500MB — ₦350</option>
          <option>1GB — ₦650</option>
          <option>2GB — ₦1,200</option>
          <option>5GB — ₦2,950</option>
        </select>

        <button className="btn btn-primary" style={{ width: '100%' }}>Continue</button>
      </section>

      <section className="section summary-card card">
        <div style={{ fontWeight: 800, marginBottom: '.35rem' }}>Order summary</div>
        <div className="summary-item"><span>Service</span><strong>Data Purchase</strong></div>
        <div className="summary-item"><span>Recipient</span><strong>0803 123 4567</strong></div>
        <div className="summary-item"><span>Bundle</span><strong>2GB SME</strong></div>
        <div className="summary-item"><span>Total</span><strong>₦1,200</strong></div>
      </section>
    </AppFrame>
  );
}
