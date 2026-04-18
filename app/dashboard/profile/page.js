import AppShell from '../../../components/AppShell';
import { userNav } from '../../../components/DemoData';

export default function ProfilePage() {
  return (
    <AppShell title="Profile" subtitle="Manage account details and security settings." navItems={userNav} activePath="/dashboard/profile">
      <div className="split">
        <div className="card form-card">
          <label>Full Name</label>
          <input className="input" defaultValue="Demo User" />
          <label>Email</label>
          <input className="input" defaultValue="demo@mtsub.com" />
          <label>Phone Number</label>
          <input className="input" defaultValue="08030000000" />
          <label>Username</label>
          <input className="input" defaultValue="demouser" />
          <button className="btn btn-primary">Save Changes</button>
        </div>
        <div className="card form-card">
          <h3 style={{ marginTop: 0 }}>Security</h3>
          <label>Current Password</label>
          <input className="input" type="password" placeholder="Current password" />
          <label>New Password</label>
          <input className="input" type="password" placeholder="New password" />
          <label>Confirm Password</label>
          <input className="input" type="password" placeholder="Confirm password" />
          <button className="btn btn-outline">Update Password</button>
        </div>
      </div>
    </AppShell>
  );
}
