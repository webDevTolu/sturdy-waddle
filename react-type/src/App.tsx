import Greet from "./components/Greet";
import NewTodo from "./components/NewTodo";
import Todo from "./components/Todo";
import { TodoContextProvider } from "./store/todo-context";

function App() {
  return (
    <div className="">
      <Greet name="webDevTolu" />
      <TodoContextProvider>
        <NewTodo />
        <Todo />
      </TodoContextProvider>
    </div>
  );
}

export default App;
