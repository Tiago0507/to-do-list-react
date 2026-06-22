import useTodos from './hooks/useTodos';
import useTheme from './hooks/useTheme';
import ThemeToggle from './components/ThemeToggle';
import TodoStats from './components/TodoStats';
import TodoForm from './components/TodoForm';
import TodoFilters from './components/TodoFilters';
import TodoList from './components/TodoList';

export default function App() {
  const { tasks, stats, filter, setFilter, addTask, toggleTask, deleteTask } = useTodos();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app">
      <div className="app-bg-gradient" aria-hidden="true" />

      <header className="app-header">
        <div className="app-header-top">
          <div className="app-brand">
            <div className="app-logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h1 className="app-title">Mis Tareas</h1>
              <p className="app-subtitle">Organiza tu día de forma sencilla</p>
            </div>
          </div>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      <main className="app-main">
        <TodoStats stats={stats} />
        <TodoForm onAdd={addTask} />
        <TodoFilters current={filter} onChange={setFilter} />
        <TodoList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      </main>

      <footer className="app-footer">
        <p>Santiago Valencia &middot; React + Vite</p>
      </footer>
    </div>
  );
}
