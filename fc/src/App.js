import './App.css';
import FunC from './Components/FunC';
import Props from './Components/Props';

function App() {
  return (
    <div className="App">
     <FunC />
     <Props name= "Muthuraj" age={25}/>     
    </div>
  );
}
// L.no 9 name is Props, Muthuraj is Value
export default App;
