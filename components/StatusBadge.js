export default function StatusBadge({ status }) {
  const normalized = status.toLowerCase();
  return <span className={`badge ${normalized}`}>{status}</span>;
}
