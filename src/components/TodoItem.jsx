import { useState } from 'react';

export default function TodoItem({ task, onToggle, onDelete, index }) {
  const [removing, setRemoving] = useState(false);

  const handleDelete = () => {
    setRemoving(true);
    setTimeout(() => onDelete(task.id), 300);
  };

  return (
    <li
      className={`todo-item ${task.completada ? 'todo-completed' : ''} ${removing ? 'todo-removing' : ''}`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <label className="todo-checkbox-label">
        <input
          type="checkbox"
          checked={task.completada}
          onChange={() => onToggle(task.id)}
          className="todo-checkbox"
          aria-label={`Marcar "${task.texto}" como ${task.completada ? 'pendiente' : 'completada'}`}
        />
        <span className="checkmark" aria-hidden="true">
          <svg className="checkmark-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="todo-text">{task.texto}</span>
      </label>
      <button
        className="todo-btn-delete"
        onClick={handleDelete}
        aria-label={`Eliminar "${task.texto}"`}
        title="Eliminar tarea"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 4H13M5.5 4V3C5.5 2.44772 5.94772 2 6.5 2H9.5C10.0523 2 10.5 2.44772 10.5 3V4M6.5 7V11.5M9.5 7V11.5M4.5 4L5 13C5 13.5523 5.44772 14 6 14H10C10.5523 14 11 13.5523 11 13L11.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </li>
  );
}
