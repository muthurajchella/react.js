import React, {useEffect} from 'react'

const LIfeCycleFunc = () => {

    // console.log("Constructor");

    useEffect(() => {
        console.log("componentDidMount");
    }, [])

    
  return (
    <div>

    </div>
  )
}

export default LIfeCycleFunc