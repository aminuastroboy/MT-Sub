import AppFrame from '@/components/AppFrame';
import AppHeader from '@/components/AppHeader';

export default function WalletPage() {
  return (
    <AppFrame current="/app/profile">
      <AppHeader title="Wallet" subtitle="Check your balance and recent wallet activity." />

      <section className="wallet-card card">
        <div className="small-muted">Current balance</div>
        <div className="balance-amount">₦42,500</div>
        <div className="action-grid">
          <button className="btn btn-primary">Fund wallet</button>
          <button className="btn btn-ghost">Funding history</button>
        </div>
      </section>

      <section className="section list">
        {[
          ['Wallet funded', '₦20,000', 'Today, 8:10 AM'],
          ['Wallet funded', '₦10,000', 'Apr 16, 5:32 PM'],
          ['Wallet funded', '₦15,000', 'Apr 14, 9:05 AM']
        ].map(([title, amount, time]) => (
          <div className="history-card card" key={title + time}>
            <div className="transaction-row">
              <div>
                <div style={{ fontWeight: 800 }}>{title}</div>
                <div className="small-muted" style={{ marginTop: '.25rem' }}>{time}</div>
              </div>
              <div style={{ fontWeight: 800 }}>{amount}</div>
            </div>
          </div>
        ))}
      </section>
    </AppFrame>
  );
}
