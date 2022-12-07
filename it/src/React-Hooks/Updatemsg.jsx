import React, { useState } from 'react'

const Message = () => {
    let [msg, setMsg] = useState("Hello");
    let gmHandler = () => {
        setMsg("GM chirag raj")
    }
    let gnHandler = () => {
        setMsg("GN")
    }
    return (
        <div>
            <h1>Message Component : {msg}</h1>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    )
}
export default Message