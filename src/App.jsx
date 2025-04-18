import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import {ToDoContextProvider} from "./context/ToDoContextProvider"
import React from 'react'
import { useTodo } from './context/TodoContext';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from "framer-motion";


const App = () => {
  return (
  <>
  <ToDoContextProvider>
      <MainContent />
  </ToDoContextProvider>

   <Toaster position="top-right" />  
  </>
  );
};




const MainContent = () => {
  
  const { allTodos } = useTodo();

  return (
    <div className="bg-[#1b304f] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto rounded-lg px-4 py-3 text-white shadow shadow-[#7d9ecf] flex flex-col justify-center items-center pt-7">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2 underline-offset-8 underline">Manage Your Todos</h1>

        <div className="mb-4">
          <TodoForm />
        </div>


        <div className="flex flex-wrap gap-y-3">
        <AnimatePresence>
          {allTodos.map((todo) => (
            <div className="w-full" key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          ))}
          </AnimatePresence>
        </div>


      </div>
    </div>
  );
};

export default App;
