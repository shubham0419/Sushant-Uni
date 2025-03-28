import React from 'react'
import { useState } from 'react';
import Todo from './Todo';

const AllTodos = () => {

  const [todos, setTodos] = useState([]);
  const [val,setVal] = useState('');

  return (
    <>
      <div>
        <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
        <button onClick={()=>{
          setTodos([...todos,val])
          setVal("")
        }}>Add</button>
      </div>
      {todos.map((todo,idx)=>{
        return <Todo key={todo} text={todo} setter={setTodos} index={idx}/>
      })}
    </>
  )
}

export default AllTodos