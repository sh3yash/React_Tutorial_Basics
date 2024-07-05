
const EventHandling = () => {

    
    const handleButtonClick = (event) => {
  
        console.log(event);
        alert("onClickEvent called here");
 
    };
    const handleWelcomeUser=(name)=>{
        console.log(`Hello welcome ${name}`)
    }


  return (
    <>
    <button onClick={handleButtonClick}>Click Me</button>

    <button onClick={()=>handleWelcomeUser("Yash Sharma")}>You are Welcome</button>
    </>
  )
}

export default EventHandling