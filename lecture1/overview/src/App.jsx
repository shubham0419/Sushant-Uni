import './App.css'
import Navbar from './components/navbar'

function App() {

  const timestamp = "morning";
  let check;

  return (
  <>
    <Navbar user={"Shubham"}/>
    {/* <Navbar user={"Shubham"}></Navbar>
    {Navbar({user:"shubham"})} */}
    <h1>hello</h1>
    <p>{timestamp}</p>
    <p>{timestamp=="morning"?"good Morning":"good Night"}</p>
    <p>{timestamp=="morning" && "good morning"}</p>
    <p>{timestamp!=="morning" || "good night"}</p>
    <p>{check ?? "good night"}</p>
  </>
  )
}

export default App
