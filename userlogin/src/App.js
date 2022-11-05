import {BrowserRouter, Routes, Route, useNavigate, Link, Navigate} from 'react-router-dom'
// import { taskContext } from '../Context/taskContext';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Home from './Home/Home';
import Tasklist from './Tasklist/Tasklist';
import {taskContext} from './Context/taskContext'
import { useReducer } from 'react';
import {stateReducer, value} from './Context/taskReducer'

function App() {
   const [state,dispatch] = useReducer(stateReducer, value);
   console.log(state);
  return (
    <taskContext.Provider value={{state, dispatch}}>
    <div className="App">
        {/* <Login /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="Home" element={<Home />}></Route>
            <Route path="TaskList" element={<Tasklist />}></Route>
            <Route path='*' element={<Navigate to="/" />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
    </taskContext.Provider>
  );

}

export default App;
