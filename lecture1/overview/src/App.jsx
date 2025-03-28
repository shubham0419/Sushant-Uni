import './App.css'
import Navbar from './components/navbar'

function App() {

  const timestamp = "morning";
  let check;

  let arr = [2,3,4,5];

  // function fun(it){

  // }

  // let fun = (it)=>{}
  
    // map return new modified array
  let mappedArray = arr.map((it)=>{
    return it*it;
  })

  // console.log(mappedArray);
  let filteredArr = arr.filter((it)=>{
    return (it%2==0);
  })

  // console.log(filteredArr);

  let reducedArr = arr.reduce((acum,it)=>{
    return acum+it;
  },0)

  // console.log(reducedArr);

  let a = [1,2,3,4,5,6,7,8,9,10,11,12,15,30];
  // Q1 write a code to get the square root of all the numbers in the array
  // Q2 writew a code to get All the number which is divisible by 3 and 5
  let ans2 = a.filter((it)=>{
    // return (it%3==0 && it%5==0);
    return (it%15==0);
  })
  // Q3 write a code to get the sum of all the even numbers in the array
  let ans3 = a.reduce((accum,it)=>{
    if(it%2==0){
      return accum+it;
    }
    return accum;
  },0);

  console.log(ans3);

  let firstMatch = a.find((it)=>{
    return it%15==0;
  })

  return (
  <>
    {/* <Navbar user={"Shubham"}/> */}
    {/* <Navbar user={"Shubham"}></Navbar>
    {Navbar({user:"shubham"})} */}
    <h1>hello</h1>
    <p>{timestamp}</p>
    <p>{timestamp=="morning"?"good Morning":"good Night"}</p>
    <p>{timestamp=="morning" && "good morning"}</p>
    <p>{timestamp!=="morning" || "good night"}</p>
    <p>{check ?? "good night"}</p>
    <p>
      { 
        a.filter((it)=>{
          return (it%15==0);
        })
      }
    </p>
    <p>
      {
        a.reduce((accum,it)=>{
          if(it%2==0){
            return accum+it;
          }
          return accum;
        },0)
      }
    </p>
  </>
  )
}

export default App
