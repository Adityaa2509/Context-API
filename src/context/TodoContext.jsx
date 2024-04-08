import React, { createContext, useContext, useEffect, useState } from "react";
import {nanoid} from 'nanoid';
export const TodoContext = createContext();

export const TodoProvider = ({children})=>{



    const [Todo,setTodo] = useState([]);
     const[temp,settemp]=useState("");
    const [update,setupdate]=useState(false);
    const[updateid,setupdateid] = useState();
    
     useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
            console.log(storedTodos)
            if(storedTodos!=='undefined')
            setTodo(JSON.parse(storedTodos))
    }, []);


function addTodo(newTodo) {
    //logic to add todo
    if (newTodo === "") return;
    console.log(newTodo);
    const toadd = {
        id: nanoid(),
        Text: newTodo
    };
    const updatedTodos = [...Todo, toadd];
    setTodo(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos)); 
    console.log()
}    function removeTodo(id){
        //logic to remove todo
        const ntodo = Todo.filter((td)=>td.id!==id)
        console.log(ntodo)
         localStorage.setItem('todos', JSON.stringify(ntodo)); 
   
        setTodo(ntodo)
  
    }

    function updateTodo(newtxt){
        //logic to update todo
        const toupdate = Todo.filter((td)=>td.id === updateid)
        if(toupdate.length  === 0)return ;
        console.log(toupdate)
        toupdate[0].Text = newtxt;
         localStorage.setItem('todos', JSON.stringify(Todo)); 
   
        setTodo([...Todo]);
        setupdateid(0);
    }
    return (
        <TodoContext.Provider value={{Todo,setTodo,addTodo,removeTodo,updateTodo,temp,settemp,update,setupdate,updateid,setupdateid}}>
            {children}
        </TodoContext.Provider>
    )

}


export  const useTodo = ()=>{
    return useContext(TodoContext)
}
