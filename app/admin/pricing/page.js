import AppShell from '../../../components/AppShell';
import { adminNav } from '../../../components/DemoData';

const airtimePricing = [
  { network: 'MTN', purchase: '97%', sell: '99%', margin: '2%' },
  { network: 'Airtel', purchase: '96.5%', sell: '99%', margin: '2.5%' },
  { network: 'Glo', purchase: '96%', sell: '98.5%', margin: '2.5%' },
  { network: '9mobile', purchase: '95%', sell: '98%', margin: '3%' }
];

export default function AdminPricingPage() {
  return (
    <AppShell title="Pricing" subtitle="Manage airtime rates and profit margins." navItems={adminNav} activePath="/admin/pricing">
      <div className="table-card card">
        <table>
          <thead><tr><th>Network</th><th>Purchase Rate</th><th>Selling Rate</th><th>Margin</th></tr></thead>
          <tbody>
            {airtimePricing.map((row) => (
              <tr key={row.network}><td>{row.network}</td><td>{row.purchase}</td><td>{row.sell}</td><td>{row.margin}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
