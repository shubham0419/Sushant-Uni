import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);
  // useeffect
    useEffect(()=>{
      console.log("hello");
    },[count])

  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact'/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
