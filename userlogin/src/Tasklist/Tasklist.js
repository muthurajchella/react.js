import React, { useState , useContext} from 'react';
import {Link} from "react-router-dom";
import './TaskList.css';
import { stateContext } from '../context/stateContext';

const Tasklist = () => {
const [command, setCommand] = useState("");
const [message, setMessage] = useState("");
const [date, setDate] = useState("");
const [task, addTask] = useState([]);
const {state, dispatch} = useContext(stateContext);

const handleChangeCommand = (ev) => {
  console.log(ev);
  setCommand(ev.target.value);
}

const handleChangeMessage = (ev) => {
  console.log(ev);
  setMessage(ev.target.value);
}

const updateDate = (ev) => {
  setDate(ev.target.value)
}

const  submittedCommand= (ev) =>{
  ev.preventDefault();
  const temp = {
    command,
    message,
    date,
  }

dispatch({type: "task", payload: [...state.task, temp]});
};


  return ( 
    <div className='taskList'>
      <div className='tkhomeicon'><Link to="/Home"><h1><img src='https://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/256/blue-home-icon.png'></img></h1></Link></div>
      <h1>Add Task</h1>
      <form>
        <input type="text" name="commandInput" placeholder='Command' onChange={handleChangeCommand}></input><br></br><br></br>
        <textarea type="text" row="10" col="50" name='commandDiscripes' placeholder='Message' onChange={handleChangeMessage}></textarea><br></br><br></br>
        <input type={"date"} name="commandDate" onChange={updateDate}></input><br></br><br></br>
        <button onClick={(ev) => submittedCommand(ev)}>Submit</button>
      </form>
      {/* {state.task?.map((item, index) => (<p key={index}>{item.command}{" "}{item.message}</p>))} */}
    </div>
   
  )
}

export default Tasklist