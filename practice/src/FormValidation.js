import React, {useState} from 'react';

const FormValidation = () => {
    const [userName, setUserName] = useState("")

    const submitForm = (e) => {
        e.preventDefault();
        // setUserName();

    }

    const changeName = (e) => {
        setUserName(e.target.value);
    }

  return (
    <div>
        <form onSubmit={submitForm}>
            <input type="text" onChange={changeName} value={userName} placeholder="muthu"></input> {<br/>}{<br/>}
            <button type='submit'>Change Name</button>
        </form>
        <p>{userName}</p>
    </div>
  )
}

export default FormValidation