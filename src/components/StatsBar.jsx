export default function StatsBar({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const active = total - completed;
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="stats-bar">
      <div className="stats-numbers">
        <span><strong>{active}</strong> active</span>
        <span><strong>{completed}</strong> done</span>
        <span><strong>{pct}%</strong> complete</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
