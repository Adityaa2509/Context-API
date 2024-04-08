import React from 'react'
import { useTodo } from './context/TodoContext'
import Input from './components/Input';
import AllTodo from './components/AllTodo';

function App() {
 const{Todo,setTodo,addTodo} =  useTodo();
  return (
    <div className='bg-gray-800 text-white font-extrabold text-4xl flex flex-col  items-center h-screen'>
    <div >
      TODO USING CONTEXT API
    </div>
    <Input/>
    <AllTodo/>
    
    </div>
  )
}

export default App
