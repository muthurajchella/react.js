import React from 'react'

setInterval(ShowTime)

function ShowTime(){
    return (
        <div>
            <h1>Hello Uers</h1>
            <h2>Time is {new Date().toLocaleString()}</h2>
        </div>
    )
}


const FC = () => {
  return (
    <div>
        <ShowTime />
    </div>
  ) 
}

export default FC