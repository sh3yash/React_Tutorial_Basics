//kamjor h abhi css me. hahahaha!
//isliye simple button use kr lia
import { useState } from 'react';
import './ToggleSwitch.css'
import { RxSwitch } from "react-icons/rx";

const ToggleSwitch = () => {

     const[cssApplied, setCssApplied]=useState(true);
     const cssApplier=()=>{

       if(cssApplied=== true)
       {       
            setCssApplied(()=>false)

       }
       else
        {       
             setCssApplied(()=>true) 
        }

    }
    const newCss=cssApplied != true ? "dark" :"light";
    const newName=cssApplied != true ? "Dark mode" :"Light Mode";
  return (

    <>
        <div className='main'>
            <button id={newCss} onClick={cssApplier}>{newName}</button>
            <RxSwitch />

        </div>
    </>

    
  )
}

export default ToggleSwitch