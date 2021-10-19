import {  useState } from 'react';
import { TodoList } from './components/List';


// src/interfaces/todo.ts
interface ITodo {
  name: string
  date: string
}

// input type date - html
// _any_, string, number, [], {}, boolean
// current сделать вывод
// добавить действие при отправке пустых значений в локальное хранилище
// опустошать инпуты при нажатии на кнопку
function App() {
  const [inputTodo, setInputTodo] = useState('');
  const [inputWhen, setInputWhen] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([])
  const handleCreate = () => {
    if(inputTodo.trim() && inputWhen.trim())
    {
      setTodos(prev => [...prev, {name: inputTodo , date: inputWhen}])
    }
    else{
      alert('значение - хуйня')
    }
  }
  return (
    <>
    <input placeholder="Todo" value={inputTodo} onChange={(e)=> setInputTodo(e.target.value)}/>
    <input placeholder="when" value={inputWhen} onChange={(e)=> setInputWhen(e.target.value)}/>
      <button onClick={handleCreate}>insert todo</button>
    <p>{JSON.stringify(todos)}</p>
    <p>{todos.map((todos)=>(
      <p>{todos.date + " " + todos.name}</p>
    ))}</p>
    
  
      <TodoList>
      </TodoList>
    </>
  );
}

export default App;