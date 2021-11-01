import { useState, useEffect } from "react";
import {
  Button,
  InputDate,
  InputTodo,
  OutputDate,
  OutputTodo,
  Bubble,
  Card,
} from "./styles";

// input type date - html
// _any_, string, number, [], {}, boolean

export const TodoList = (props: any) => {
  interface ITodo {
    name: string;
    date: string;
  }
  const [inputTodo, setInputTodo] = useState("");
  const [inputWhen, setInputWhen] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const handleCreate = () => {
    if (inputTodo.trim() && inputWhen.trim()) {
      const newTodo = { name: inputTodo, date: inputWhen };
      setTodos((prev) => [...prev, newTodo]);
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
      setInputTodo(""); //найти вариант как сделать это красивее
      setInputWhen("");
    } else {
      alert("значение - хуйня");
    }
  };

  const handleClear = () => {
    localStorage.removeItem("todos");
    setTodos([]);
  };

  // При загрузке страницы берет значение из LS и записывает в стейт
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos")!) || [];
    setTodos(storageTodos);
  }, []);

  return (
    <span>
      <Card>
        <InputTodo
          type="todo"
          placeholder="Todo"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
        <InputDate
          type="when"
          placeholder="when"
          value={inputWhen}
          onChange={(e) => setInputWhen(e.target.value)}
        />
        <div>
          <Button onClick={handleCreate}>Insert todo</Button>
          <Button onClick={handleClear}>Clear storage</Button>
        </div>
        {/* <p>{JSON.stringify(todos)}</p> */}
        <p>
          {todos.map((todos) => (
            <Bubble>
              <OutputTodo>{todos.name}</OutputTodo>
              <OutputDate>{todos.date}</OutputDate>
            </Bubble>
          ))}
        </p>
        {/* <p>
      {JSON.stringify(todos)}
    </p> */}
      </Card>
    </span>
  );
};
