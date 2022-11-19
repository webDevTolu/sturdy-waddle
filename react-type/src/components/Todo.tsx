import { FC } from "react";
import TodoClass from "../models/todo";
import TodoItem from "./TodoItem";

const Todo: FC<{ items: TodoClass[]; onRemoveTodo: (id: string) => void }> = ({
  items,
  onRemoveTodo,
}) => {
  return (
    <ul className="flex flex-col gap-y-2 divide-y divide-blue-200">
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={() => {
            onRemoveTodo(item.id);
          }}
        />
      ))}
    </ul>
  );
};

export default Todo;
