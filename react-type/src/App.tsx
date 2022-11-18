import Greet from "./components/Greet";
import Todo from "./components/Todo";
import TodoClass from "./models/todo";

function App() {
  const todoList = [
    new TodoClass("Learn React"),
    new TodoClass("Learn Next.js"),
    new TodoClass("Learn TypeScript"),
  ];
  // const todoList = ["react", "next"];
  return (
    <div className="">
      <Greet name="webDevTolu" />
      <Todo items={todoList} />
    </div>
  );
}

export default App;
