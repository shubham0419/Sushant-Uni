import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { todoSetter } from "../features/todo/todoSlice";

const Todo = ({ todo }) => {

  const dispatch = useDispatch()

  async function deleteTodo(){
    let res = await axios.delete(`http://localhost:5000/delete/${todo.id}`)
    // setAllTodos(res.data.TODOs);
    dispatch(todoSetter(res.data.TODOs))
  } 

  return (
    <>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <button onClick={deleteTodo}>🗑</button>
    </>
  );
};

export default Todo;
