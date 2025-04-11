import React, { useEffect, useState } from 'react'
import axios from "axios"
import Todo from '../components/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { todoSetter } from '../features/todo/todoSlice';

const Home = () => {
  const allTodos = useSelector(state=>state.todo.value)
  const dispatch = useDispatch()

  async function getAllTodos() {
    let res = await axios.get("http://localhost:5000/allTodo");
    dispatch(todoSetter(res.data.TODOs))
  }

  useEffect(()=>{
    getAllTodos();
  },[])

  return (
    <div> <h1>All Todos</h1>
      {allTodos.map((todo)=>{
        return <Todo key={todo.id} todo={todo} />
      })}
    </div>
  )
}

export default Home