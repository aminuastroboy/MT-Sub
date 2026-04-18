import AppFrame from '@/components/AppFrame';
import AppHeader from '@/components/AppHeader';

export default function AirtimePage() {
  return (
    <AppFrame current="/app/airtime">
      <AppHeader title="Buy Airtime" subtitle="Recharge any supported network in a few taps." />

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
        <input className="input" placeholder="0706 241 3355" />

        <label>Amount</label>
        <input className="input" placeholder="500" />

        <button className="btn btn-primary" style={{ width: '100%' }}>Buy airtime</button>
      </section>

      <section className="section summary-card card">
        <div style={{ fontWeight: 800, marginBottom: '.35rem' }}>Quick note</div>
        <div className="small-muted" style={{ lineHeight: 1.65 }}>
          Airtime purchases are kept simple on purpose: network, phone number and amount. This screen is optimized for one-hand mobile use.
        </div>
      </section>
    </AppFrame>
  );
}
