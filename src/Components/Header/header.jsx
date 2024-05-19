import React from "react";
import "./header.css";

export function Header() {
  return (
    <div>
      <h1 id="list">To Do App</h1>
      <input type="text" placeholder="Create List" />
      <button>create</button>
      <hr />
    </div>
  );
}
