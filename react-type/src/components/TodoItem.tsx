import { FC } from "react";

const TodoItem: FC<{ text: string }> = ({ text }) => {
  return (
    <li>
      <p>{text}</p>
    </li>
  );
};

export default TodoItem;
