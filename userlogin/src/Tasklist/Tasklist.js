import React, { useState , useContext} from 'react';
import {Link, Navigate, useNavigate, useSearchParams} from "react-router-dom";
import './TaskList.css';
import { stateContext } from '../context/stateContext';
// import { useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';

const Tasklist = () => {
  const {state, dispatch} = useContext(stateContext);
  
  const Navigate = useNavigate();
  const [Params] = useSearchParams();
  // console.log(Params);
  const id = parseInt(Params.get("id"));
  const editId = state.task.findIndex((item) => item.id === id);

const [command, setCommand] = useState( state.task[editId]?.command || "");
const [message, setMessage] = useState(state.task[editId]?.message || "");
const [Priorrity, setPriorrity] = useState(false);
const [comp, setComp] = useState(false);

const [date, setDate] = useState("");
const [task, addTask] = useState([]);
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


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

const handleChangePriorrity = () =>{
  setPriorrity = !Priorrity;
}

const  submittedCommand= (ev) =>{
  ev.preventDefault();
  if(id){
    const temp = {
      command,
      message,
      date,
      id:id,
      complete : comp,
      Priorrity : Priorrity,

    }
    dispatch({type: "editUpdate", payload: temp});
    console.log(temp);
    Navigate("/TaskList");
    setCommand("");
    setMessage("");
    setPriorrity("");
    setComp("");
  }
  else{
  const temp = {
    command,
    message,
    date,
    id: state.task.length+1,
    complete : comp,
    Priorrity : Priorrity,
  }
  console.log(temp);
  dispatch({type: "task", payload: [...state.task, temp]});
  setCommand('');
  setMessage("");
  setPriorrity("");
  setComp("");
}
};


  return ( 
    <div className='taskList'>

      <div className='tkhomeicon'><Link to="/Home"><h1><img src='https://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/256/blue-home-icon.png'></img></h1></Link></div>

      <h1>Add Task</h1>

      <form>

          <TextField id="standard-basic" label="" variant="standard" name="commandInput" placeholder='Task Name' onChange={handleChangeCommand}/>

          <br></br><br></br>

          <TextField
          id="standard-multiline-flexible"
          label=""
          multiline
          maxRows={4}
          // value={value}
          // onChange={handleChange}
          variant="standard" name='commandDiscripes' placeholder='Message' onChange={handleChangeMessage}/>
          <br></br><br></br>

          <input type={"date"} name="commandDate" onChange={updateDate}></input>
          <br></br><br></br>

          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} checked={Priorrity} onChange={() => setPriorrity(!Priorrity)}/>
            
          <Button variant="contained" onClick={(ev) => submittedCommand(ev)}>Submit</Button>
          
        
      </form>
      {/* {state.task?.map((item, index) => (<p key={index}>{item.command}{" "}{item.message}</p>))} */}
    </div>
   
  )
}

export default Tasklist