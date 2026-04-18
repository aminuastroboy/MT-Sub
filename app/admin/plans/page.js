import AppShell from '../../../components/AppShell';
import { adminNav, dataPlans } from '../../../components/DemoData';
import StatusBadge from '../../../components/StatusBadge';

export default function AdminPlansPage() {
  return (
    <AppShell title="Data Plans" subtitle="Add and manage available data bundles." navItems={adminNav} activePath="/admin/plans">
      <div className="card form-card" style={{ marginBottom: '1rem' }}>
        <div className="quick-grid" style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
          <input className="input" placeholder="Search plan or network" />
          <select className="select"><option>All Networks</option><option>MTN</option><option>Airtel</option><option>Glo</option><option>9mobile</option></select>
          <button className="btn btn-primary">Add New Plan</button>
        </div>
      </div>
      <div className="table-card card">
        <table>
          <thead><tr><th>Network</th><th>Plan</th><th>Duration</th><th>Cost</th><th>Selling Price</th><th>Status</th></tr></thead>
          <tbody>
            {dataPlans.map((plan) => (
              <tr key={plan.network + plan.plan}><td>{plan.network}</td><td>{plan.plan}</td><td>{plan.duration}</td><td>{plan.amount}</td><td>{plan.price}</td><td><StatusBadge status={plan.status} /></td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
