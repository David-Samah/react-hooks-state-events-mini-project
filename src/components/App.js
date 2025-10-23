import React, { useState } from "react";
import { TASKS, CATEGORIES } from "../data";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const displayedTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter(task => task.category === selectedCategory);

 
  function handleDelete(deletedText) {
    setTasks(tasks.filter(task => task.text !== deletedText));
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  // Add a new task to the list
  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={displayedTasks} onDeleteTask={handleDelete} />
    </div>
  );
}

export default App;
