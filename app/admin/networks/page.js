import AppShell from '../../../components/AppShell';
import { adminNav } from '../../../components/DemoData';
import StatusBadge from '../../../components/StatusBadge';

const networks = [
  { name: 'MTN', airtime: 'Active', data: 'Active' },
  { name: 'Airtel', airtime: 'Active', data: 'Active' },
  { name: 'Glo', airtime: 'Active', data: 'Active' },
  { name: '9mobile', airtime: 'Active', data: 'Paused' }
];

export default function AdminNetworksPage() {
  return (
    <AppShell title="Networks" subtitle="Enable or disable services by provider." navItems={adminNav} activePath="/admin/networks">
      <div className="network-row">
        {networks.map((network) => (
          <div className="card network-card" key={network.name}>
            <strong>{network.name}</strong>
            <p className="muted">Airtime: <StatusBadge status={network.airtime} /></p>
            <p className="muted">Data: <StatusBadge status={network.data} /></p>
            <button className="btn btn-outline">Manage</button>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
