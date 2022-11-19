import { FC } from "react";

const TodoItem: FC<{ text: string; onRemoveTodo: () => void }> = ({
  text,
  onRemoveTodo,
}) => {
  return (
    <li
      onClick={onRemoveTodo}
      className="cursor-pointer text-base text-blue-900 font-medium"
    >
      <p>{text}</p>
    </li>
  );
};

export default TodoItem;
