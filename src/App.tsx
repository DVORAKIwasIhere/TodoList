import {  useState } from 'react';
import { TodoList } from './components/List';


// src/interfaces/todo.ts
interface ITodo {
  name: string
  date: string
}

// input type date - html
// _any_, string, number, [], {}, boolean

// осталось перенести на localstorage
function App() {
  const [inputTodo, setInputTodo] = useState('');
  const [inputWhen, setInputWhen] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([])
  const handleCreate = () => {
    if(inputTodo.trim() && inputWhen.trim())
    {
      setTodos(prev => [...prev, {name: inputTodo , date: inputWhen}]);
      setInputTodo("") //найти вариант как сделать это красивее
      setInputWhen("")
    }
    else{
      alert('значение - хуйня')
    }
  }
  return (
    <>
    <input type = "todo" placeholder="Todo" value={inputTodo} onChange={(e)=> setInputTodo(e.target.value)}/>
    <input type = "when" placeholder="when" value={inputWhen} onChange={(e)=> setInputWhen(e.target.value)}/>
      <button onClick={handleCreate}>insert todo</button>
    {/* <p>{JSON.stringify(todos)}</p> */}
    <p>{todos.map((todos)=>(
      <p>
      <span>{todos.date}</span>
      <span>{todos.name}</span>
      </p>
    ))}</p>
    
  
      <TodoList>
      </TodoList>
    </>
  );
}

export default App;