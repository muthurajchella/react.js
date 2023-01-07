import React, { useState , useContext, useEffect} from 'react';
import {createSearchParams, Link, Navigate, useNavigate  } from "react-router-dom";
import './Home.css';
import { stateContext } from '../context/stateContext';
import { useSearchParams } from 'react-router-dom';
import { Button} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Home = () => {


  const {state, dispatch} = useContext(stateContext);
  const navigate = useNavigate();
  const {comp, setComp} = useState(false);
  const [searchQry, setSearchQry] = useState("");
  const [task, setTask] = useState([]);
  const [search, setSearch] = useState('');


  const dataEdit = (id) =>{
    navigate({
      pathname: "/TaskList",
      search : createSearchParams({
        id:id
      }).toString()

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

  const SearchItems = (e) => {
    setSearch(e.target.value);
  }

  const lockOut = () => {
    dispatch({type:"lockout", payload: state.isAthenticate});
  }

  useEffect(() =>{
    filterBySearchQry();
  }, [searchQry]);

  useEffect(() => {
    setTask(state.task)
  }, [state.task])

  const filterBySearchQry = () => {
    if(searchQry?.length){

    const results = state?.task?.filter((str) => str.includes(searchQry)
    );

    setTask(results);

    }else{
      setTask(state?.task)
    }
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
                <button onClick={() => lockOut()}>LockOut</button>
                <Button variant="contained">Fav</Button>


                <input type="search" placeholder='Search...'  name={"searchQry"} onChange={(ev) => setSearchQry(ev.target.value)}></input>

            </div>
            
        </nav> 
        {state.task?.map((item, index) => (<div key={index} className='createTask'>
            <h1>{item.command}</h1>
            {<hr/>}
            <h2>{item.message}{" "}
              <span>
                {/* <input type={"checkbox"} checked={item.complete} onChange={handleComplete}></input><label>Complete</label> */}
                <FormControlLabel control={<Checkbox checked={comp} onChange={() =>setComp(!comp)}/>} label="Complete" />
              </span>
            </h2>
            <p>{item.date}{<br />}</p>
            <h3>{item.Priorrity?"true":"flase"}</h3>
            <span>
              <Button onClick={() => dataEdit(item.id)}>Edit</Button>
              <Button onClick={() => dataDelete(item.id)}>Delete</Button>
            </span>
          </div>))};

          {state.task?.length === 0 && <h1>no task founded</h1>}
    </div>
  )
}

export default Home