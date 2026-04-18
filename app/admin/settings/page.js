import AppShell from '../../../components/AppShell';
import { adminNav } from '../../../components/DemoData';

export default function AdminSettingsPage() {
  return (
    <AppShell title="Settings" subtitle="Platform branding and business configuration." navItems={adminNav} activePath="/admin/settings">
      <div className="split">
        <div className="card form-card">
          <label>Platform Name</label>
          <input className="input" defaultValue="MT-Sub" />
          <label>Business Name</label>
          <input className="input" defaultValue="Musatech Solutions Ltd" />
          <label>Support Email</label>
          <input className="input" defaultValue="support@mt-sub.demo" />
          <label>Support Phone</label>
          <input className="input" defaultValue="+234 XXX XXX XXXX" />
          <button className="btn btn-primary">Save Settings</button>
        </div>
        <div className="card form-card">
          <h3 style={{ marginTop: 0 }}>System Notes</h3>
          <p className="muted">Use this page later for API credentials, notification rules, transaction policies and company profile updates.</p>
          <ul>
            <li>Provider API integration pending</li>
            <li>Payment gateway integration pending</li>
            <li>Role-based access already planned in structure</li>
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
