import { useState } from "react";
import Greet from "./components/Greet";
import NewTodo from "./components/NewTodo";
import Todo from "./components/Todo";
import TodoClass from "./models/todo";

function App() {
  const [todoList, setTodoList] = useState<TodoClass[]>([]);

  // const todoList = ["react", "next"];
  const addTodo = (todo: string) => {
    const newTodo = new TodoClass(todo);
    setTodoList([...todoList, newTodo]);
  };
  const removeTodo = (id: string) => {
    const newTodoList = todoList.filter((t) => t.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div className="">
      <Greet name="webDevTolu" />
      <NewTodo onAddTodo={addTodo} />
      <Todo items={todoList} onRemoveTodo={removeTodo} />
    </div>
  );
}

export default App;
