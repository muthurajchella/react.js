import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import FunC from './Components/FunC';
import Props from './Components/Props';
import Profile from './RouterMethod/Profile';
import About from './RouterMethod/About';
import Home from './RouterMethod/Home'
import Resume from './RouterMethod/Resume';
import RajuProfile from './RouterMethod/RajuProfile'
import QParams from './RouterParams/QParams';


function App() {
  return (
    <div className="App">
     {/* <FunC />
     <Props name= "Muthuraj" age={25}/>   */}
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Profile/:Id" element={<Profile />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="Resume" element={<Resume />}></Route>
          <Route path="RajuProfile" element={<RajuProfile />}></Route>
          <Route path="QParams" element={<QParams />}></Route>
          <Route path='*' element={<Navigate to="/" />}></Route>

        </Routes>
     </BrowserRouter>   
    </div>
  );
}
// L.no 9 name is Props, Muthuraj is Value
export default App;
