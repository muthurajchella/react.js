import React from 'react'
import "./Login.css"
import { useState } from "react"
import User from "../loginJson/input.json"
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const NavigateHome = useNavigate();

  const handleChange = (ev) => {
    console.log("ev", ev);
    if(ev.target.value === ''){
      setError("Invalid userId or Password")
    }else{
      setError("")
    }
    if(ev.target.name === "userId"){
      setInput(ev.target.value)
    }else{
      setPassword(ev.target.value)
    }

  }

  // const handleChangePassword = (eve) => {
  //   console.log("ev", eve)
  //   setPassword(eve.target.value);
  // }

  const formSubmitted = (ev) => {
    ev.preventDefault();
    if(input === '' || password === ''){
        setError("Invalid userId or Password");
        return;
    }
    setError('');

    User.find((item) =>{
      if(item.id === input && item.password ===password){
        NavigateHome("/Home");
      }
      setError("Invalid userId or Password");
    })

    console.log(input, password,);
  }

  return (
    <div className='login'>
      <div className='blur'></div>
        <nav>
          <div className='logo'>
            <h1>Key</h1>
          </div>
          <div className='navi'>
            <ul>
              <li><a href='#'>Login</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Register</a></li>
              <li><a href='#'>Content</a></li>
            </ul>
          </div>
        </nav>
        <div className='login-con'> 
        <h1>Login</h1>
          <form>
            <input type="text" name="userId" placeholder='User Id' onChange={handleChange}></input><br></br><br></br>
            <input type="password" name="password" placeholder='Password' onChange={handleChange}></input><br></br><br></br>
            <button type={"submit"} onClick={(ev) => formSubmitted(ev)}>LOGIN</button>
          </form>
          <h2>{error}</h2>
        </div>
    </div>
  )
}

export default Login