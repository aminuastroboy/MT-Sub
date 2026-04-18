import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <div className="container section">
        <div className="split">
          <div className="card form-card">
            <h1>Contact Us</h1>
            <p className="muted">Simple support form placeholder for the frontend demo.</p>
            <label>Name</label>
            <input className="input" placeholder="Your full name" />
            <label>Email</label>
            <input className="input" placeholder="you@example.com" />
            <label>Message</label>
            <input className="input" placeholder="How can we help?" />
            <button className="btn btn-primary">Send Message</button>
          </div>
          <div className="card" style={{ padding: '1.4rem' }}>
            <h3>Musatech Solutions Ltd</h3>
            <p className="muted">Support and business details can be updated later with the real company contacts.</p>
            <p>Email: support@mt-sub.demo</p>
            <p>Phone: +234 XXX XXX XXXX</p>
            <p style={{ marginBottom: 0 }}>Coverage: MTN, Airtel, Glo and 9mobile services.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
