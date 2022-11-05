import React, { useState, useContext, useReducer} from 'react'
import {Link} from "react-router-dom"
import './TaskList.css'
import { taskContext } from '../Context/taskContext';
import { stateReducer } from '../Context/taskReducer';

const Tasklist = () => {
const [command, setCommand] = useState("");
const [message, setMessage] = useState("");
// const [empty, setEmpty] = useState([]);
const {state, dispatch}= useContext(taskContext);
console.log(state);
 

const handleChangeCommand = (ev) => {
  console.log(ev);
  setCommand(ev.target.value);
}

const handleChangeMessage = (ev) => {
  console.log(ev);
  setMessage(ev.target.value);
}

const  submittedCommand= (ev) =>{
  ev.preventDefault();
  const temp = {
    command,
    message,
  }
  
// setEmpty([...empty, temp])
dispatch({type: "empty", payload:[...state.empty, temp]})
console.log(state)

//  console.log(command,message)
}

  return ( 
    <div className='taskList'>
      <div><Link to="/Home"><h1>Home</h1></Link></div>
      <h1>Add Task</h1>
      <form>
        <input type="text" name="commandInput" placeholder='Command' onChange={handleChangeCommand}></input><br></br><br></br>
        <textarea type="text" row="10" col="50" name='commandDiscripes' placeholder='Message' onChange={handleChangeMessage}></textarea><br></br><br></br>
        <button onClick={(ev) => submittedCommand(ev)}>Submit</button>
      </form>
      {state.empty?.map((item, index) => (<p key={index}>{item.command}{" "}{item.message}</p>))}
    </div>
   
  )
}

export default Tasklist