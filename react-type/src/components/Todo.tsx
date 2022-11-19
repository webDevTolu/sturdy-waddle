import { FC, useContext } from "react";
import TodoClass from "../models/todo";
import { TodoContext } from "../store/todo-context";
import TodoItem from "./TodoItem";

const Todo = () => {
  const { removeTodo, items } = useContext(TodoContext);

  return (
    <ul className="flex flex-col gap-y-2 divide-y divide-blue-200">
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={() => {
            removeTodo(item.id);
          }}
        />
      ))}
    </ul>
  );
};

export default Todo;
