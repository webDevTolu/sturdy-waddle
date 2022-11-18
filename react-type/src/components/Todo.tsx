import React from "react";
import TodoClass from "../models/todo";

const Todo: React.FC<{ items: TodoClass[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todo;
