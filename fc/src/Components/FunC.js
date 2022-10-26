import React from 'react'

const FunC = () => {
    const btnClick = (val) =>{
        console.log("clicked", val);
    };



  return (
    <div>
        
       <button onClick={() => btnClick("React")}>Add</button>
    </div>
  )
}

export default FunC