export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <button
        className={`check-btn priority-${task.priority}`}
        onClick={() => onToggle(task.id)}
        aria-label="Toggle task"
      >
        {task.completed ? "✓" : ""}
      </button>
      <span className="task-text">{task.text}</span>
      <span className={`priority-tag priority-${task.priority}`}>{task.priority}</span>
      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
      >
        ✕
      </button>
    </li>
  );
}
