import React, { useState , useContext} from 'react';
import {Link  } from "react-router-dom";
import './Home.css';
import { stateContext } from '../context/stateContext';

const Home = () => {
  const {state, dispatch} = useContext(stateContext);
  console.log(state)

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
        {state.task?.map((item, index) => (<h1 key={index} className='createTask'>{item.command}{" "}{item.message}{<br/>}{item.date}</h1>))}
    </div>
  )
}

export default Home