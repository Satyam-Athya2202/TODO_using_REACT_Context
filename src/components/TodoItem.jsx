import React from 'react'
import { useTodo } from '../context/TodoContext';
import { useState } from 'react';
import { motion } from 'framer-motion';


const TodoItem = ({todo}) => {

    const {updatedTodo,toggleCompleted,deleteTodo}=useTodo()

const [isEditable,setEditable]=useState(false)
 
const [todoMsg,setTodoMsg]=useState(todo.todo)



const editTodo=()=>{
updatedTodo(todo.id,{...todo,todo:todoMsg});
setEditable(false)
} 

const taskCompleted=()=>{
    toggleCompleted(todo.id)
}


  return (
    <motion.div
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm 
       overflow-hidden  shadow-white/50 duration-300 text-black ${
      todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
    }`}
    initial={{ opacity: 0, x: -50,y:-50 }}
    animate={{ opacity: 1, x: 0,y:0,transition:{staggerChildren:0.5}}}
    exit={{ opacity: 0, scale:1 }}
    transition={{ duration: 0.2 }}
  >
  
    <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={taskCompleted}
    /> 
    <input
        type="text"
        className={`border outline-none w-full  rounded-lg ${
            isEditable ? "border-black/40 px-2 bg-amber-50" : "border-transparent"
        }
         ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditable}
    />
    {/* Edit, Save Button */}
    <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
            if (todo.completed) return;

            if (isEditable) {
                editTodo();
            } else setEditable((prev) => !prev);
        }}
        disabled={todo.completed}
    >
        {isEditable ? "📁" : "✏️"}
    </button>
    {/* Delete Todo Button */}
    <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
    >
        ❌
    </button>
</motion.div>
  )
}

export default TodoItem
