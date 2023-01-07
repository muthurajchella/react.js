import './App.css';
import Func from './Func';
import ClassFunc from './ClassFunc';
import FuncState from './FuncState';
import LifeCycleClassFunc from './LifeCycleClassFunc';
import LIfeCycleFunc from './LIfeCycleFunc';
import ConditionalRender from './ConditionalRender';
import ListOfArray from './ListOfArray';
import FormValidation from './FormValidation';
import Useref from './Useref';
import ListItems from './Todo/ListItems';
import { useState } from 'react';


function App() {
  // const name = "Muthuraj"
  
  const [todoName, setTodoName] = useState("");
  const [list, setList] = useState([]);


  const updateTodoName = (e) => {
    setTodoName(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault();
    setList([...list, {
      name :todoName,
      complete : false
     }
    ]);
    setTodoName('')
    // console.log(todoName);
  };

  const onDone = (item) => {
    console.log(item);
    let newListItem = list.map((ListItems => {
      if (ListItems.name === item.name){
        return ({...ListItems, complete: !ListItems.complete});

      }

      return ListItems
    }))
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      <input type={"text"}
      placeholder='Add your todo value'
      value={todoName}
      onChange={updateTodoName}></input>

      <button onClick={addTodo}>Add Todo</button>

      {
        list.map((item) => <ListItems obj={item} onDone={onDone}/>)
      }


      {/* <Useref /> */}

      {/* <FormValidation /> */}

      {/* <ListOfArray /> */}

      {/* <ConditionalRender /> */}

      {/* <LIfeCycleFunc /> */}

      {/* <LifeCycleClassFunc /> */}

      {/* <FuncState /> */}

      {/* <Func name = {name}/> */}
      
      {/* <ClassFunc fullName = {name+" Chelladurai"+" .B.E"}/> */}
    </div>
  );
}

export default App;
