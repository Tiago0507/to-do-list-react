import TodoItem from './TodoItem';

export default function TodoList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="todo-empty">
        <div className="todo-empty-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M16 20H32M16 28H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <rect x="8" y="8" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="2" />
            <path d="M12 8V6C12 4.89543 12.8954 4 14 4H34C35.1046 4 36 4.89543 36 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <p className="todo-empty-title">Sin tareas aquí</p>
        <p className="todo-empty-subtitle">Agrega una tarea para comenzar</p>
      </div>
    );
  }

  return (
    <ul className="todo-list" role="list" aria-label="Lista de tareas">
      {tasks.map((task, i) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          index={i}
        />
      ))}
    </ul>
  );
}
