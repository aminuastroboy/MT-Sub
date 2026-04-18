import './globals.css';
import InstallPrompt from '@/components/InstallPrompt';

export const metadata = {
  metadataBase: new URL('https://mt-sub.vercel.app'),
  title: {
    default: 'MT-Sub',
    template: '%s | MT-Sub'
  },
  description: 'Simple mobile-first data and airtime app by Musatech Solutions Ltd.',
  applicationName: 'MT-Sub',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'MT-Sub'
  },
  formatDetection: {
    telephone: false
  },
  icons: {
    icon: [
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: '/icons/apple-touch-icon.png'
  }
};

export const viewport = {
  themeColor: '#0b63f6',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <InstallPrompt />
      </body>
    </html>
  );
}
