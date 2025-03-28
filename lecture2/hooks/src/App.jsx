import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllTodos from './components/AllTodos'

function App() {
  let obj = {
    name: 'Ali',
    age: 20,
    class:"cs"
  }

  let {name,age} = obj;
  let [first,second] = [1,2,3,4,5,6,7,8,9,10];
  // destructre - getting value from object, array directly
  // let {}
  let [count,setCount] = useState(0);
  // count = > getter
  // setCount => setter
  function incriment () {
    // setCount(count+1);
    setCount((prev)=>{prev+1});
  }
  // let count= 0;
  // function incriment () {
  //   count++;
  //   console.log(count);
  // }

  return (
    <>
      <AllTodos/>
    </>
  )
}

export default App
 