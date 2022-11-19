import { FC, FormEvent, useRef } from "react";

const NewTodo: FC<{ onAddTodo: (text: string) => void }> = ({ onAddTodo }) => {
  const todoRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const todoText = todoRef.current!.value;

    if (todoText?.trim().length === 0) {
      return;
    }
    onAddTodo(todoText);
    todoRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-y-2">
      <label htmlFor="todo" className="text-lg font-semibold text-slate-900">
        Todo:
      </label>
      <input
        type="text"
        id="todo"
        ref={todoRef}
        className="border w-64 text-lg py-2 pl-3"
      />
      <button
        type="submit"
        className="flex px-4 py-2 border bg-blue-300 text-blue-800 font-bold text-lg w-max"
      >
        Add
      </button>
    </form>
  );
};
export default NewTodo;
