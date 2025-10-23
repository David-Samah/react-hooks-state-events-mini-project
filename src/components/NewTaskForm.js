import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1] || ""); // skip "All"

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;

    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[1] || "");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>

      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {/* skip the "All" category */}
          {categories
            .filter(c => c !== "All")
            .map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
        </select>
      </label>

      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;

