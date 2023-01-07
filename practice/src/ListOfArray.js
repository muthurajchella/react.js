import React, {useState} from 'react'

const ListOfArray = () => {
    const[skills, setSkills] = useState([
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "REACT.JS"
    ])


  return (
    <div>
        <ul>
      {
      skills.map(item => <li key={item}>{item}</li>)
      }
        </ul>
    </div>
  )
}

export default ListOfArray