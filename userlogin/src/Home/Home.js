import React, { useState , useContext} from 'react';
import {Link  } from "react-router-dom";
import './Home.css';
import { stateContext } from '../context/stateContext';

const Home = () => {
  const {state, dispatch} = useContext(stateContext);


  const dataDelete= (ev) => {
    dispatch({type: 'deletask', payload: [...state.task]})

  };

  return ( 
    <div className='home'> 
      {/* <h1>{state.empty}</h1> */}
    
        <nav>
            <div className='home-profile'>
                <img src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"></img>
            </div>
            <div className='home-navi'>
                <div><Link to="/Tasklist"><h1>TaskList</h1></Link></div>
            </div>
        </nav> 
        {state.task?.map((item, index) => (<div key={index} className='createTask'><h1>{item.command}</h1>{<hr/>}<h2>{item.message}</h2><p>{item.date}{<br />}<input type={"radio"}></input></p><span><button>Edit</button>{"  "}<button onClick={() => dataDelete()}>Delete</button></span></div>))}
    </div>
  )
}

export default Home