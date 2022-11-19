import { createContext, FC, useState } from "react";
import TodoClass from "../models/todo";

type TodoContextInterface = {
  items: TodoClass[];
  addTodo: (todo: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = createContext<TodoContextInterface>({
  items: [],
  addTodo: (todo: string) => {},
  removeTodo: (id: string) => {},
});

export const TodoContextProvider: FC<{ children: any }> = ({ children }) => {
  const [todoList, setTodoList] = useState<TodoClass[]>([]);

  const addTodo = (todo: string) => {
    const newTodo = new TodoClass(todo);
    setTodoList([...todoList, newTodo]);
  };
  const removeTodo = (id: string) => {
    const newTodoList = todoList.filter((t) => t.id !== id);
    setTodoList(newTodoList);
  };

  const todoContextValue: TodoContextInterface = {
    items: todoList,
    addTodo,
    removeTodo,
  };
  return (
    <TodoContext.Provider value={todoContextValue}>
      {children}
    </TodoContext.Provider>
  );
};
