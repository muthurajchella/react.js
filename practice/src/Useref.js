import React, {useEffect, useRef, useState} from 'react'

const Useref = () => {

    const [userName, setUserName] = useState("");

    const inputEl = useRef(null);

    const changeUserName = (ev) => {
        setUserName(ev.target.value)
    }

    const submitForm = (e) =>{
        e.preventDefault();
    }

    console.log(inputEl);

    useEffect(() =>{
        console.log(inputEl);
        inputEl.current.focus()
    }, [])

    
  return (
    <div>
        <form onSubmit={submitForm}>
            <input type={"text"} placeholder="name" value={changeUserName} ref={inputEl}></input><br /><br />
            <button type='submit'>Click Me</button>
        </form>
    </div>
  )
}

export default Useref