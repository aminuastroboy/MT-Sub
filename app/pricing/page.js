import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import { dataPlans } from '../../components/DemoData';
import StatusBadge from '../../components/StatusBadge';

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <div className="container section">
        <div className="table-card card">
          <h1>Service Pricing Preview</h1>
          <p className="muted">Sample frontend pricing table for MT-Sub launch plans.</p>
          <table>
            <thead>
              <tr><th>Network</th><th>Plan</th><th>Duration</th><th>Cost</th><th>Selling Price</th><th>Status</th></tr>
            </thead>
            <tbody>
              {dataPlans.map((plan) => (
                <tr key={plan.network + plan.plan}>
                  <td>{plan.network}</td><td>{plan.plan}</td><td>{plan.duration}</td><td>{plan.amount}</td><td>{plan.price}</td><td><StatusBadge status={plan.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
