export default function TodoStats({ stats }) {
  const percentage = stats.total > 0
    ? Math.round((stats.completed / stats.total) * 100)
    : 0;

  const circumference = 2 * Math.PI * 36;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="todo-stats">
      <div className="stats-ring-container">
        <svg className="stats-ring" width="90" height="90" viewBox="0 0 80 80">
          <circle
            cx="40" cy="40" r="36"
            fill="none"
            stroke="var(--color-border-hover)"
            strokeWidth="6"
          />
          <circle
            className="stats-ring-progress"
            cx="40" cy="40" r="36"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 40 40)"
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${percentage}% de tareas completadas`}
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-success)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="stats-ring-text">
          <span className="stats-ring-number">{percentage}</span>
          <span className="stats-ring-percent">%</span>
        </div>
      </div>

      <div className="stats-counters">
        <div className="stat-item">
          <span className="stat-number">{stats.total}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item stat-completed">
          <span className="stat-number">{stats.completed}</span>
          <span className="stat-label">Completadas</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item stat-active">
          <span className="stat-number">{stats.active}</span>
          <span className="stat-label">Pendientes</span>
        </div>
      </div>
    </div>
  );
}
