import React, {useState, useEffect} from 'react'

const ConditionalRender = () => {
    const [name, setName] = useState("Muthuraj");
    const [button, setbutton] = useState("");
    const [subs, setSubs] = useState(99);

    const clicked = () => {
        setSubs(subs +1 )
    }
  return (
    <div>
        <p>UserName : {name}</p>
        {/* <p>Own Button : {(subs < 100) ? "No Button" : "Sliver Button"}</p> */}
        <p>Own Button : {(subs < 100 && "No Button")}
            {(subs >= 100 && "Silver Button")}       
        </p>
        <p>Sub : {subs}k</p>
        <button onClick={clicked}>Sub Me</button>
    </div>
  )
}

export default ConditionalRender