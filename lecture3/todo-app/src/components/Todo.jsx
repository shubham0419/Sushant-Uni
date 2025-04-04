import axios from "axios";
import React from "react";

const Todo = ({ todo ,setAllTodos}) => {

  async function deleteTodo(){
    let res = await axios.delete(`http://localhost:5000/delete/${todo.id}`)
    setAllTodos(res.data.TODOs);
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
