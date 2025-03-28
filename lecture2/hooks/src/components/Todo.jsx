import React from "react";

const Todo = ({ text ,setter,index}) => {

  function deleteTodo(){
    setter((prev)=>{
      let newArr = [...prev];
      newArr.splice(index,1);
      return newArr;
    })
  }

  return (
    <div>
      <p>{text}</p>
      <button onClick={()=>{deleteTodo()}}>X</button>
    </div>
  );
};

export default Todo;
