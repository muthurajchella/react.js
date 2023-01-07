import React, { useState } from 'react'

const FuncState = () => {
    const [profileName, setProfileName] = useState("ProfileName : ");
    const [subs, setSub] = useState(1000);

    const Clicked = (e) => {
        setProfileName("Muthuraj");
        setSub(subs +1);
    }
  return (
    <div>
        <p>{profileName}</p>
        <p>{subs}</p>
        <button onClick={Clicked}>ClickMe</button>
    </div>
  )
}

export default FuncState