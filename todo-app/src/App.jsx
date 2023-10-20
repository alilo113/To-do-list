import { useState } from "react"
import { TodoForm } from "./TodoForm";

function App() {
  const [todos, setNewTodos] = useState([]);

  function deleteTodo(id){
    setNewTodos((currentTodo) => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <TodoForm/>
      {todos.map(todo => {
        return (
          <div key={todo.id}>
            <div>
            <input type='checkbox'/>
            {todo.value}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default App