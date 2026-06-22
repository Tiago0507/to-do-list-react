import { useState, useCallback, useMemo } from 'react';
import tareasIniciales from '../data/initialTasks';

const STORAGE_KEY = 'todo-list-tasks';

function loadTasks() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    /* localStorage no disponible o datos corruptos */
  }
  return tareasIniciales;
}

function saveTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    /* localStorage no disponible */
  }
}

export default function useTodos() {
  const [tasks, setTasks] = useState(loadTasks);
  const [filter, setFilter] = useState('all');

  const updateTasks = useCallback((updater) => {
    setTasks((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      saveTasks(next);
      return next;
    });
  }, []);

  const addTask = useCallback((texto) => {
    const trimmed = texto.trim();
    if (!trimmed) return;
    updateTasks((prev) => [
      ...prev,
      { id: Date.now(), texto: trimmed, completada: false },
    ]);
  }, [updateTasks]);

  const toggleTask = useCallback((id) => {
    updateTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t))
    );
  }, [updateTasks]);

  const deleteTask = useCallback((id) => {
    updateTasks((prev) => prev.filter((t) => t.id !== id));
  }, [updateTasks]);

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter((t) => !t.completada);
      case 'completed':
        return tasks.filter((t) => t.completada);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const stats = useMemo(() => ({
    total: tasks.length,
    completed: tasks.filter((t) => t.completada).length,
    active: tasks.filter((t) => !t.completada).length,
  }), [tasks]);

  return { tasks: filteredTasks, stats, filter, setFilter, addTask, toggleTask, deleteTask };
}
