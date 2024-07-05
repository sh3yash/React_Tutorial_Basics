import { useState } from "react"

// const users =  [
//     {name: "Alice", age:25},
//     {name: "Yash", age:20},
//     {name: "Kirti", age:17},
//     {name: "Bhavesh", age:8},

// ]
const StateExample = () => {


  const [users, setUsers]=useState(
    [
      {name: "Alice", age:25},
      {name: "Yash", age:20},
      {name: "Kirti", age:17},
      {name: "Bhavesh", age:8},
  
  ]
  );

  // console.log(users);

  const userCount=users.length;
  
   const avgAge = () => {

     let sum=0;

     users.map((currElem)=>{

       sum=sum+currElem.age;
    

     });

     return  sum/userCount;  

   }

  return (
    <>
    {users.map((currElem, index)=>{



        return(
        <>
        <li key={index}>
 
        <div>name is {currElem.name} </div>
        {/* <div>Age is  {currElem.age}</div> */}

        </li>

        </>

    )})

    }
        <div>toal students are  {userCount}</div>
        <div>Average age of students is  {avgAge()}</div>
    </>
  )
}

export default StateExample