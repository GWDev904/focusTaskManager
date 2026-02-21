import { useState } from "react";

const PRIORITIES = ["low", "medium", "high"];

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim(), priority);
    setText("");
  };

  return (
    <form className="task-input-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        autoFocus
      />
      <div className="input-row">
        <div className="priority-selector">
          {PRIORITIES.map((p) => (
            <button
              key={p}
              type="button"
              className={`priority-btn priority-${p} ${priority === p ? "active" : ""}`}
              onClick={() => setPriority(p)}
            >
              {p}
            </button>
          ))}
        </div>
        <button className="add-btn" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
}
