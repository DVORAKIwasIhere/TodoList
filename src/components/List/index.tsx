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
import { ITodo } from "./interface";

export const TodoList = (props: any) => {
  const [inputTodo, setInputTodo] = useState("");
  const [inputWhen, setInputWhen] = useState("");

  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleCreate = () => {
    if (inputTodo.trim() && inputWhen.trim()) {
      const newTodo = { name: inputTodo, date: inputWhen };
      setTodos((prev) => [...prev, newTodo]);
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
      setInputTodo("");
      setInputWhen("");
    } else {
      alert("значение - хуйня");
    }
  };

  const handleClear = () => {
    localStorage.removeItem("todos");
    setTodos([]);
  };

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
        <span>
          {todos.map((todos) => (
            <Bubble>
              <OutputTodo>{todos.name}</OutputTodo>
              <OutputDate>{todos.date}</OutputDate>
            </Bubble>
          ))}
        </span>
      </Card>
    </span>
  );
};
