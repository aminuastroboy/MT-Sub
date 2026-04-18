import './globals.css';

export const metadata = {
  title: 'MT-Sub',
  description: 'Data and airtime reseller platform for Musatech Solutions Ltd'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
