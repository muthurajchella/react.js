// Props is defind as One component Data used to another component To pass props Props = Properties
// parant import child
//Props is immutable

import React from 'react'

function Second(props){
  return<div>
    {props.name}
  </div>
}


function First(props){
  return<div>
     {props.name}
      <button onClick={() => props.get('Raj')}>Click</button>
     <Second name={props.name} />
     </div>
}

const Props = (props) => {
 
  const getData = (data) =>{
    console.log("Data", data)
  }


  // console.log(props)
  return (
    <div>
      {props.name} {" "}
      {props.age}
      
      <First name={props.name}  get ={getData} />
    </div>
  )
}

export default Props