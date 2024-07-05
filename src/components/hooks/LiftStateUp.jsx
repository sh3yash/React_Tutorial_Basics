import { useState } from "react";

const LiftStateUp = () => {
    const[inputValue, setInputValue]= useState("");
  return (
    <>
    <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
    <DisplayComponent inputValue={inputValue} setInputValue={setInputValue}/>
    </>
  )
}


const InputComponent = ({inputValue, setInputValue}) => {

    return(
        <>
        <label>Enter Your Name: </label>
        <input type="text" placeholder="Name" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input><br/>
        <button onClick={(e)=> setInputValue(e.target.value)}>Click here</button><br/>
        <div>the output is {inputValue}</div>
        </>
    )

}



const DisplayComponent = ({inputValue, setInputValue}) => {
  return (
    <>
        <p>The current input is {inputValue} </p>
    
    </>
    
  )
}

export default LiftStateUp