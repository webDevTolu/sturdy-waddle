import { FC } from "react";
import TodoClass from "../models/todo";
import TodoItem from "./TodoItem";

const Todo: FC<{ items: TodoClass[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todo;
