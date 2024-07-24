import { useState } from 'react'
import './Registration.css'

const Registration = () => {
  const [user,setUser]=useState({
    name: "",
    email: "",
    password: "",
    phone: "",

  });
  
  const handleInput=(e)=>{
    const {name, value}=e.target;
    setUser((prev)=>({ ...prev, [name]:value}))

  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(user.name);
  }

  return (
    <>
    <div>
        <div className='Register-css'>
           <p className='displayed-info'>{`Hello my name is ${user.name}, my email address is ${user.email}  and my phone number is ${user.phone}`}</p> 
          <form className='register-form' >
            <h1 className='heading'>Sign Up</h1>
            <p>Please fill the details to create an account</p><br/>

            <label className='label-reg'>Name</label><br/>
            <input type='text' placeholder='enter your full name' name='name' value={user.name} className='input-reg' onChange={handleInput}></input><br/><br/>

            <label className='label-reg'>Email</label><br/>
            <input type='email' placeholder='enter your email id' name='email' value={user.email} className='input-reg' onChange={handleInput}></input><br/><br/>

            <label className='label-reg'>Password</label><br/>
            <input type='password' placeholder='enter strong password' name='password' value={user.password} className='input-reg' onChange={handleInput}></input><br/><br/>

            <label className='label-reg'>Phone Number</label><br/>
            <input type='text' placeholder='enter valid phone number'name='phone' value={user.phone} className='input-reg' onChange={handleInput}></input><br/><br/>

            <p>By create an account you agree to our 
              <a href='#'> Terms & Policy</a>
            </p><br/>

            <button className='sign-up-btn' name='submit' onSubmit={handleSubmit}>Sign Up</button>
          </form>

        </div>
    </div>
    </>
  )
}

export default Registration