import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <div className="container section">
        <div className="card" style={{ padding: '1.6rem' }}>
          <h1>About MT-Sub</h1>
          <p className="muted">MT-Sub is a reseller-focused data and airtime platform created for Musatech Solutions Ltd.</p>
          <p>
            The frontend is designed to give users a smooth way to buy data and airtime while giving admins full visibility into pricing,
            users and transactions. It is mobile-friendly and structured for future live provider integration.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
