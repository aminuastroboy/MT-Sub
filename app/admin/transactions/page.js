import AppShell from '../../../components/AppShell';
import { adminNav, transactions } from '../../../components/DemoData';
import StatusBadge from '../../../components/StatusBadge';

export default function AdminTransactionsPage() {
  return (
    <AppShell title="Transactions" subtitle="Review and monitor all orders across the platform." navItems={adminNav} activePath="/admin/transactions">
      <div className="card form-card" style={{ marginBottom: '1rem' }}>
        <div className="quick-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          <input className="input" placeholder="Search by ID" />
          <select className="select"><option>All Types</option><option>Data</option><option>Airtime</option></select>
          <select className="select"><option>All Networks</option><option>MTN</option><option>Airtel</option><option>Glo</option><option>9mobile</option></select>
          <select className="select"><option>All Statuses</option><option>Success</option><option>Pending</option><option>Failed</option></select>
        </div>
      </div>
      <div className="table-card card">
        <table>
          <thead><tr><th>ID</th><th>Date</th><th>Type</th><th>Network</th><th>Phone</th><th>Amount</th><th>Status</th></tr></thead>
          <tbody>
            {transactions.map((item) => (
              <tr key={item.id}><td>{item.id}</td><td>{item.date}</td><td>{item.type}</td><td>{item.network}</td><td>{item.phone}</td><td>{item.amount}</td><td><StatusBadge status={item.status} /></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
