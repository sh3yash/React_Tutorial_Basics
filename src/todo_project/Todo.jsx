import { useState } from 'react'
import './Todo.css'

import DataCard from './DataCard';
const Todo = () => {
    const [inputValue,setInputValue]=useState("");
    const[task,setTask]=useState([]);
    const handleInputChange=(value)=>{
        setInputValue(value);
    }

    const deleteData=(value)=>{
        const updatedTask=task.filter((currTask)=>currTask!==value);
        setTask(updatedTask);
        
    }
    const deleteAllData=()=>{
        const taskValue=[];
        setTask(taskValue);

    }


    const handleFormSubmit=(event)=>{
        event.preventDefault();

        if(!inputValue) return;

        if(task.includes(inputValue)) {
        setInputValue("");
        return; 
        }

        setTask((prevTask)=>[...prevTask, inputValue]);

        setInputValue("");

    }
  return (
    <>
        <section>
            <header className="header-class">
                <h1 id="header-id">Todo List</h1>
            </header>
            <section className='todo-form'>
                <form action="#" target="_self" onSubmit={handleFormSubmit}>
                    <input type="text" id="name-todo" value={inputValue} onChange={(event)=> handleInputChange(event.target.value)}></input>
                    <button id="add-button-todo">Add Item</button>
                </form>
            </section>
                <DataCard task={task} deleteData={deleteData()}/>
            <section>
                <button id='clear-all-btn' onClick={()=> deleteAllData()}>Clear all</button>
            </section>
                    
        </section>


    </>

  )
}

export default Todo