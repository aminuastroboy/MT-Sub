export default function StatusBadge({ status }) {
  const normalized = status.toLowerCase();
  const className = normalized === 'success' || normalized === 'active'
    ? 'badge badge-success'
    : normalized === 'pending' || normalized === 'paused'
      ? 'badge badge-pending'
      : 'badge badge-failed';

  return <span className={className}>{status}</span>;
}
