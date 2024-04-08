import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function AllTodo() {
   const{Todo,removeTodo,settemp,update,setupdate,updateid,setupdateid} =  useTodo();
   const handleclick = (id)=>{
      console.log(id);
      removeTodo(id)
   }
   const handleupdate = (id,text)=>{
      settemp(text)
      setupdate(true)
      setupdateid(id)
   }
  return (
    <div className='flex flex-col gap-5 mt-6 '>
        
        {
          
            Todo.map((td)=>(
            
                <div key={td.id} className='relative bg-gray-600 text-xl font-normal w-[745px] rounded-lg'>
                           
                    <div className='py-1 px-4'>{td.Text}</div>
                    <button className=' absolute right-4 top-1/2 transform -translate-y-1/2  py-1 text-sm
                    bg-white rounded-md p-1' onClick={()=>handleclick(td.id)}>❌</button>

                    <button className='absolute right-14 top-1/2 transform -translate-y-1/2 rounded-md p-1 text-sm bg-white' onClick={()=>handleupdate(td.id,td.Text)}>✏️</button>
                </div>            ))
        }
    </div>
  )
}

export default AllTodo
