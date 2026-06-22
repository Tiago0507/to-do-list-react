const FILTERS = [
  { key: 'all', label: 'Todas' },
  { key: 'active', label: 'Pendientes' },
  { key: 'completed', label: 'Completadas' },
];

export default function TodoFilters({ current, onChange }) {
  return (
    <div className="todo-filters" role="tablist" aria-label="Filtrar tareas">
      {FILTERS.map(({ key, label }) => (
        <button
          key={key}
          role="tab"
          aria-selected={current === key}
          className={`filter-btn ${current === key ? 'filter-active' : ''}`}
          onClick={() => onChange(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
