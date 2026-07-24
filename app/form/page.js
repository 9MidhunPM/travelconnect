"use client";
import { useState } from "react";

export default function FormPage() {
  const [task, setTask] = useState("");
  return (
    <form onSubmit={(e) => { e.preventDefault(); alert("Saved task: " + task); }}>
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Task name..." />
      <button type="submit">Save Task</button>
    </form>
  );
}
