import { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    onAdd(texto);
    setTexto('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="todo-input-wrapper">
        <svg className="todo-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9 6V12M6 9H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          className="todo-input"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="¿Qué necesitas hacer hoy?"
          aria-label="Nueva tarea"
          autoComplete="off"
        />
      </div>
      <button
        type="submit"
        className="todo-btn-add"
        disabled={!texto.trim()}
        aria-label="Agregar tarea"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <span className="btn-add-text">Agregar</span>
      </button>
    </form>
  );
}
