export const userNav = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/dashboard/airtime', label: 'Buy Airtime' },
  { href: '/dashboard/data', label: 'Buy Data' },
  { href: '/dashboard/wallet', label: 'Wallet' },
  { href: '/dashboard/transactions', label: 'Transactions' },
  { href: '/dashboard/profile', label: 'Profile' }
];

export const adminNav = [
  { href: '/admin', label: 'Overview' },
  { href: '/admin/users', label: 'Users' },
  { href: '/admin/transactions', label: 'Transactions' },
  { href: '/admin/networks', label: 'Networks' },
  { href: '/admin/plans', label: 'Data Plans' },
  { href: '/admin/pricing', label: 'Pricing' },
  { href: '/admin/settings', label: 'Settings' }
];

export const transactions = [
  { id: 'MTS10211', date: 'Apr 15, 2026', type: 'Data', network: 'MTN', phone: '0803 555 2180', amount: '₦1,250', status: 'success' },
  { id: 'MTS10210', date: 'Apr 15, 2026', type: 'Airtime', network: 'Airtel', phone: '0814 220 9920', amount: '₦500', status: 'pending' },
  { id: 'MTS10209', date: 'Apr 14, 2026', type: 'Data', network: 'Glo', phone: '0705 113 0001', amount: '₦2,100', status: 'failed' },
  { id: 'MTS10208', date: 'Apr 14, 2026', type: 'Airtime', network: '9mobile', phone: '0809 311 0065', amount: '₦1,000', status: 'success' }
];

export const dataPlans = [
  { network: 'MTN', plan: '1GB SME', duration: '30 Days', amount: '₦650', price: '₦700', status: 'Active' },
  { network: 'Airtel', plan: '2GB Gifting', duration: '30 Days', amount: '₦1,200', price: '₦1,300', status: 'Active' },
  { network: 'Glo', plan: '3GB Corporate', duration: '30 Days', amount: '₦1,550', price: '₦1,700', status: 'Active' },
  { network: '9mobile', plan: '500MB', duration: '7 Days', amount: '₦300', price: '₦350', status: 'Paused' }
];

export const users = [
  { name: 'Aisha Bello', username: 'aishab', email: 'aisha@example.com', phone: '08030000001', wallet: '₦12,400', status: 'Active', joined: 'Jan 18, 2026' },
  { name: 'Kabiru Musa', username: 'kabiru', email: 'kabiru@example.com', phone: '08030000002', wallet: '₦3,100', status: 'Suspended', joined: 'Feb 02, 2026' },
  { name: 'Fatima Usman', username: 'fatimau', email: 'fatima@example.com', phone: '08030000003', wallet: '₦28,950', status: 'Active', joined: 'Mar 11, 2026' }
];
