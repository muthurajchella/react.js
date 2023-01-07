import React, { useState } from 'react'

const Func = (props) => {
  console.log(props);
  // const [userName, setUserName] = useState("");

  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
}

export default Func