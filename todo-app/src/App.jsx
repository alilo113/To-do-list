import { useState } from "react"

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setNewTodos] = useState([]);

  function setTodo(e){
    e.preventDefault();
    setNewTodos((currentTodo) => {
      return [...currentTodo, 
        {
          id: crypto.randomUUID(),
          value: todoValue,
          checked: false
        }
      ]
    })
  }

  /*function checkTodo(id, completed){
    setNewTodos((currentTodo) => {
      currentTodo.map(todo => {
        if(id === todo.id){
          return {...todo, completed}
        }
      })
    })
  }*/

  return (
    <>
      <form onSubmit={setTodo}>
        <input value={todoValue}
         onChange={e => setTodoValue(e.target.value)}
         type="text"
         id="todoValue">
        </input>
        <button>add todo</button>
      </form>
      {todos.map(todo => {
        return (
          <div key={todo.id}>
            <div>
            <input type='checkbox' checked={todo.checked} /*onChange={e => checkTodo(e.target.completed)}*//>
            {todo.value}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default App