import { useState } from "react"

export function TodoForm(){
    const [todoValue, setTodoValue] = useState("");

    function setTodo(e){
        e.preventDefault();
        setNewTodos((currentTodo) => {
            return [...currentTodo, 
                {
                    id: crypto.randomUUID(),
                    value: todoValue,
                }
            ]
        })
    }
    
    return (
    <form onSubmit={setTodo}>
        <input value={todoValue}
        onChange={e => setTodoValue(e.target.value)}
        type="text"
        id="todoValue">
        </input>
        <button>add todo</button>
      </form>
    )
}