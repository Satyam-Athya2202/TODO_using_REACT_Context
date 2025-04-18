import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

const TodoForm = () => {

const [todoTask,setTodoTask]=useState("")

const {addTodo}=useTodo()

const addingTask=(e)=>{
  e.preventDefault();
  console.log("submkited");
  
if(!todoTask){return} 


// we are spreading the object in addTodo thats why here we need to pass an object

// isme id nhi rakhte hain kyunki wese bhi hum id to de hi rhe hain context create krte time app.jsx me id se render kr 
addTodo({
// id:Date.now(),
todo:todoTask,
completed:false
})

setTodoTask("")
}


  return (
    <form  
    onSubmit={addingTask}
    className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoTask}
                onChange={(e)=>setTodoTask(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
  )
}

export default TodoForm
