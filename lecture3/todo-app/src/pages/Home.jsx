import React, { useEffect, useState } from 'react'
import axios from "axios"
import Todo from '../components/Todo';

const Home = () => {
  const [allTodos,setAllTodos] = useState([]);

  async function getAllTodos() {
    let res = await axios.get("http://localhost:5000/allTodo");
    setAllTodos(res.data.TODOs);
  }

  useEffect(()=>{
    getAllTodos();
  },[])

  return (
    <div> <h1>All Todos</h1>
      {allTodos.map((todo)=>{
        return <Todo key={todo.id} todo={todo} setAllTodos={setAllTodos}/>
      })}
    </div>
  )
}

export default Home