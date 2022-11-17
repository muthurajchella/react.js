import React, { useState , useContext} from 'react';
import {createSearchParams, Link, Navigate, useNavigate  } from "react-router-dom";
import './Home.css';
import { stateContext } from '../context/stateContext';
import { useSearchParams } from 'react-router-dom';
import { Button} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Home = () => {
  const {state, dispatch} = useContext(stateContext);
  const Navigate = useNavigate();



  const handleComplete = (item, index) => {
    let temp = [...state.task];
    
    console.log(temp);
  }

  const dataEdit = (id) =>{
    Navigate({
      pathname: "/TaskList",
      search : createSearchParams({id:id}).toString(),

    })
  }

  const dataDelete= (item) => {
    dispatch({type: 'deletask', payload: item})

  }

    // dispatch(state(temp))

    
  const Ascending = (e) => {
    let order1 = [...state.task.sort((a,b) => a.date.localeCompare(b.date))]
    console.log(order1);
    dispatch({type: "ascending" , payload: order1})
  }

      
  const Descending = (ev) => {
    let order2 = [...state.task.sort((a,b) => b.date.localeCompare(a.date))]
    console.log(order2);
    dispatch({type: "ascending" , payload: order2})
  }


  return ( 
    <div className='home'> 
      {/* <h1>{state.empty}</h1> */}
    
        <nav>
            <div className='home-profile'>
                <img src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"></img>
            </div>
            <div className='home-navi'>
                <div><Link to="/Tasklist"><h1>TaskList</h1></Link></div>
                <Button variant="contained" onClick={(e) =>Ascending(e)}>Ascending</Button>{" "}
                <Button variant="contained" onClick={(ev) =>Descending(ev)}>Descending</Button>
                <Button variant="contained">Fav</Button>

            </div>
        </nav> 
        {state.task?.map((item, index) => (<div key={index} className='createTask'>
            <h1>{item.command}</h1>
            {<hr/>}
            <h2>{item.message}{" "}
              <span>
                {/* <input type={"checkbox"} checked={item.complete} onChange={handleComplete}></input><label>Complete</label> */}
                <FormControlLabel control={<Checkbox checked={item.complete} onChange={() => handleComplete(item, index)}/>} label="Complete" />
              </span>
            </h2>
            <p>{item.date}{<br />}</p>
            <span>
              <Button onClick={() => dataEdit(item.id)}>Edit</Button>
              <Button onClick={() => dataDelete(item.id)}>Delete</Button>
            </span>
          </div>))}
    </div>
  )
}

export default Home