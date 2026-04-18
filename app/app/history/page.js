import AppFrame from '@/components/AppFrame';
import AppHeader from '@/components/AppHeader';
import StatusBadge from '@/components/StatusBadge';
import { transactions } from '@/components/demoData';

export default function HistoryPage() {
  return (
    <AppFrame current="/app/history">
      <AppHeader title="History" subtitle="Track your recent data and airtime transactions." />
      <section className="section list">
        {transactions.map((tx) => (
          <div className="history-card card" key={tx.id}>
            <div className="transaction-row">
              <div>
                <div style={{ fontWeight: 800 }}>{tx.type} • {tx.network}</div>
                <div className="small-muted" style={{ marginTop: '.25rem' }}>{tx.detail}</div>
                <div className="small-muted" style={{ marginTop: '.35rem' }}>{tx.id} • {tx.time}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 800 }}>{tx.amount}</div>
                <div style={{ marginTop: '.45rem' }}><StatusBadge status={tx.status} /></div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </AppFrame>
  );
}
