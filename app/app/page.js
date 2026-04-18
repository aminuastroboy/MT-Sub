import Link from 'next/link';
import AppFrame from '@/components/AppFrame';
import AppHeader from '@/components/AppHeader';
import StatusBadge from '@/components/StatusBadge';
import { transactions } from '@/components/demoData';

export default function HomeAppPage() {
  return (
    <AppFrame current="/app">
      <AppHeader title="Good afternoon" subtitle="Your quick dashboard for data and airtime purchases." actionHref="/app/wallet" actionLabel="View wallet" />

      <section className="wallet-card card">
        <div className="balance-row">
          <div>
            <div className="small-muted">Available balance</div>
            <div className="balance-amount">₦42,500</div>
            <div className="small-muted">Last funding: today at 8:10 AM</div>
          </div>
          <Link href="/app/wallet" className="btn btn-soft">Fund wallet</Link>
        </div>
      </section>

      <section className="section action-grid">
        <Link href="/app/data" className="action-tile card">
          <strong>Buy Data</strong>
          <span className="small-muted">Choose network and bundle fast.</span>
        </Link>
        <Link href="/app/airtime" className="action-tile card">
          <strong>Buy Airtime</strong>
          <span className="small-muted">Recharge your line or someone else.</span>
        </Link>
      </section>

      <section className="section">
        <div className="small-muted" style={{ marginBottom: '.7rem', fontWeight: 700 }}>Networks</div>
        <div className="network-row">
          {['MTN', 'Airtel', 'Glo', '9mobile'].map((item) => (
            <div className="network-chip" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: '.7rem' }}>
          <div style={{ fontWeight: 800 }}>Recent activity</div>
          <Link href="/app/history" className="small-muted" style={{ color: 'var(--primary)', fontWeight: 700 }}>See all</Link>
        </div>
        <div className="list">
          {transactions.slice(0, 3).map((tx) => (
            <div className="history-card card" key={tx.id}>
              <div className="transaction-row">
                <div>
                  <div style={{ fontWeight: 800 }}>{tx.type} • {tx.network}</div>
                  <div className="small-muted" style={{ marginTop: '.25rem' }}>{tx.detail}</div>
                  <div className="small-muted" style={{ marginTop: '.35rem' }}>{tx.time}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 800 }}>{tx.amount}</div>
                  <div style={{ marginTop: '.45rem' }}><StatusBadge status={tx.status} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AppFrame>
  );
}
