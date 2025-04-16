
import { createContext,useContext } from "react";

export const TodoContext= createContext({
    allTodos:[{
        id:1,
        todo:"Todo Msg",
        completed: false,
    }],

    
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id )=>{},
    toggleCompleted:(id)=>{}
})


export const useTodo=()=>{

    return useContext(TodoContext)
}

export const TodoProvider= TodoContext.Provider 