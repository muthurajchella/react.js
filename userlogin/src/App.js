import {BrowserRouter, Routes, Route, useNavigate, Link, Navigate} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Home from './Home/Home';
import Tasklist from './Tasklist/Tasklist';
import {stateContext} from './context/stateContext';
import React, { useReducer } from 'react';
import {stateReducer, initialStateValue} from './context/reducer';

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialStateValue);
    console.log(state);
  return (

    <stateContext.Provider value={{state, dispatch}}>
        <div className="App">
              {/* <Login /> */}
              <BrowserRouter>
              {state.isAthenticate?(
              <Routes>
                <Route path="/" element={<Home />}></Route>
                    <Route path="TaskList" element={<Tasklist />}></Route>
                    <Route path='*' element={<Navigate to={"/"} />}></Route>
              </Routes>):(
              <Routes>
                    <Route path="/Login" element={<Login />}></Route>
                    <Route path='*' element={<Navigate to={"/Login"} />}></Route>
              </Routes>
            )
          }
              </BrowserRouter>
        </div>
    
    </stateContext.Provider>
    
  );

}

export default App;
