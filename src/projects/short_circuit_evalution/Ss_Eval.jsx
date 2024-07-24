import { useState } from 'react'
import './Ss_Eval.css'


const Ss_Eval = () => {
    const [login,setLogin]=useState(false);
    const [userName,setUserName]= useState("")
  return (
    <>
    <h1>Here is example of Short Circuit evalutation</h1>

    {login && <p>You are logged in</p>}
    {!login && <p>Please Login</p>}

    {userName && <p>hello  {userName}</p>}

    <button className="button" onClick={()=>setLogin(!login)}>
        Toggle Login State
    </button>
    <button className="button" onClick={()=> setUserName("Yash Sharma")}>
        Set User
    </button>
    <button className="button" onClick={()=>setUserName("")}>
        Clear User
    </button>
    </>
  )
}

export default Ss_Eval