import { useEffect, useState } from "react";
import { TodoProvider } from "./TodoContext";
import { toast } from 'react-hot-toast';


export const ToDoContextProvider= ({ children }) =>{


  const [allTodos, setAllTodos] = useState([]);

  // Adding a new todo

  const addTodo = (todo) => {
    //now the AllTodos are is an object so we can't just directly pass the todo we need to pass the  object{}.

    // also  hum (...todo) use kr lenge kyunki baar baar kon hi todo aur completed likhe
    setAllTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
    toast.success("Todo added!");
  };
  
  // Updating an existing todo

  // thoda complex dikh rh hai par hai easy ek baar au kr lena revision
  const updatedTodo = (id, todo) => {
    setAllTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
    toast("Todo updated ✏️", { icon: "📝" });
  };
 
  // Deleting a todo
  // yaha pr dekho jb  hum delete functionality create karte hai tb hum chahte hai ki jo id hum pass kr rhe hai wo bs na ho baki sari hon
  const deleteTodo = (id) => {
    setAllTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
    toast.error("Todo deleted");
  };



  // Toggle completed status
  const toggleCompleted = (id) => {
    setAllTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };



useEffect(()=>{

  // yaha ye wala storedTodos ek local varibale hai as you can se hum isko directly update kr set hai bina set use kiye huye
 const storedTodos= JSON.parse(localStorage.getItem("allTodos")) || [];

 if(storedTodos && storedTodos.length>0){
  setAllTodos(storedTodos)
 }

/* setAllTodos wont run if allTodo=[] hota hai to, and our initial useState remian safe or untouched



const storedTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
setAllTodos(storedTodos);

but if we do not use if statement,then setAllTodos([]) will always run even if localStorage is empty. But since your state is already [], react won't re render because it detects that the state didn't actually change(shallow comparison).

*/ 

},[])



useEffect(()=>{
  
localStorage.setItem("allTodos",JSON.stringify(allTodos))
}
,[allTodos])




  return (
    <TodoProvider
      value={{ allTodos, addTodo, updatedTodo, deleteTodo, toggleCompleted }}
    >
      {children}
    </TodoProvider>
  );
}
