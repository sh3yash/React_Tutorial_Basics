import { useState } from "react"
const Statehook = () => {
    // var add=0;
    const additionClick=()=>{
        setstate(()=>state+1)

     };

let [state,setstate]=useState(0)
  return (
    <>
    <div>
        <h1>{state}</h1>
        <button onClick={additionClick}>click me</button>
    </div>
    {/* <ChildComponent onClick={state}/> */}
    </>
  )
}

export default Statehook



// const ChildComponent = (props) => {
//   return (
//     console.log(`child component redered ${props.onClick}`)
//   )
// }
