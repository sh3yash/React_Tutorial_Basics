import { useState } from "react";
import './UseState.css'

const UseStateHook = () => {
    var [count,setCount]=useState(0);
    var [step, setStep]=useState(0);
  return (

        <all className='all-css'>
        <card className='card-css'>

            <p>{`The value is: ${count}`}</p><br/>
            <label>Step</label>
            <input type="number" value={step} onChange={(e)=> setStep(Number(e.target.value))}></input><br/>
            <button onClick={()=>setCount(count+step)} disabled={count>=100} className="btn">
                Increment
            </button>
            <button onClick={()=>setCount(count-step)}  disabled={count<=0} className="btn">
                Decrement
            </button>
            <button onClick={()=>setCount(0)} className="btn">
                Reset
            </button>


        </card>

        </all>

  )
}

export default UseStateHook