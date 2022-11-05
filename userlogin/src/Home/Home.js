import React, { useState , useContext} from 'react'
import {Link  } from "react-router-dom"
import './Home.css'
import { taskContext} from '../Context/taskContext'

const Home = () => {
  const {state, dispatch} = useContext(taskContext);
  console.log(state);
    // const task = useContext(taskContext);
  // console.log("task",task);
  return ( 
    // <taskContext.consumer>  
    <div className='home'> 
      <h1>{state.empty}</h1>
        <nav>
            <div className='home-profile'>
                <img src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"></img>
            </div>
            <div className='home-navi'>
                <div><Link to="/Tasklist"><h1>TaskList</h1></Link></div>
            </div>
        </nav> 
    </div>
  //  </taskContext.consumer>
  )
}

export default Home