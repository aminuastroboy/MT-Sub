import AppShell from '../../../components/AppShell';
import { adminNav, users } from '../../../components/DemoData';
import StatusBadge from '../../../components/StatusBadge';

export default function AdminUsersPage() {
  return (
    <AppShell title="Users" subtitle="Manage registered customers and resellers." navItems={adminNav} activePath="/admin/users">
      <div className="card form-card" style={{ marginBottom: '1rem' }}>
        <div className="quick-grid" style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>
          <input className="input" placeholder="Search users" />
          <select className="select"><option>All Statuses</option><option>Active</option><option>Suspended</option></select>
          <button className="btn btn-primary">Add User</button>
        </div>
      </div>
      <div className="table-card card">
        <table>
          <thead><tr><th>Name</th><th>Username</th><th>Email</th><th>Phone</th><th>Wallet</th><th>Status</th><th>Joined</th></tr></thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.username}>
                <td>{user.name}</td><td>{user.username}</td><td>{user.email}</td><td>{user.phone}</td><td>{user.wallet}</td><td><StatusBadge status={user.status} /></td><td>{user.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
