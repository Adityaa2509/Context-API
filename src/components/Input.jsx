import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function Input() {
    const{updateTodo,addTodo,temp,settemp,update,setupdate} = useTodo();
    const handleclick = (e)=>{
        e.preventDefault();
        console.log(e.target.value)
    addTodo(temp)
    settemp("")
    }
    const handleupdate = (e)=>{
        e.preventDefault();
        console.log(e.target.value)
        updateTodo(temp);
        setupdate(false);
        settemp("")
    }
    const handlechange=(e)=>{
        console.log(e.target.value)
        settemp(e.target.value);
        
    }
  return (
    <form className='mt-14'>
      <input type='text' placeholder='Enter Todo...' className=' text-xl font-normal rounded-lg p-1 bg-gray-600 outline-none
      rounded-r-none w-[650px] px-4' value={temp} onChange={handlechange}/>

      { update?(<button onClick={(e)=>handleupdate(e)} type='submit' className=' text-xl font-semibold rounded-lg rounded-l-none bg-green-600 p-1 px-4'>Update</button>):(
         <button onClick={(e)=>handleclick(e)} type='submit' className=' text-xl font-semibold rounded-lg rounded-l-none bg-green-600 p-1 px-4'>Add</button>)}
    </form>
  )
}

export default Input
