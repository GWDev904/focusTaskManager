import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import StatsBar from "./components/StatsBar";

const FILTERS = ["All", "Active", "Completed"];

export default function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tasks")) || [];
    } catch {
      return [];
    }
  });
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, priority) => {
    if (!text.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text, priority, completed: false, createdAt: new Date().toISOString() },
    ]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const clearCompleted = () => setTasks(tasks.filter((t) => !t.completed));

  const filtered = tasks.filter((t) => {
    if (filter === "Active") return !t.completed;
    if (filter === "Completed") return t.completed;
    return true;
  });

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div className="header-accent" />
          <h1 className="title">
            <span className="title-icon">✦</span> Focus
          </h1>
          <p className="subtitle">Stay on top of what matters</p>
        </header>

        <StatsBar tasks={tasks} />
        <TaskInput onAdd={addTask} />
        <FilterBar filters={FILTERS} active={filter} onChange={setFilter} />
        <TaskList tasks={filtered} onToggle={toggleTask} onDelete={deleteTask} />

        {tasks.some((t) => t.completed) && (
          <button className="clear-btn" onClick={clearCompleted}>
            Clear completed
          </button>
        )}
      </div>
    </div>
  );
}
