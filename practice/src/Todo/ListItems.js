import React from 'react'

const ListItems = (props) => {
  return (
    <div>
        <p>{props.obj.name}</p>
        <button onClick={() => props.onDone(props.obj)}>Mark as Done</button>
        <button>Delete</button>
    </div>
  )
}

export default ListItems