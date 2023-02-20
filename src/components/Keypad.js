// Code Keypad Component Here
import React from 'react';
import { useState } from "react";

function Keypad (){
    const [password , setPassword] = useState(""); 
    function handle(e){
       setPassword(e.target.value);
       console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" value={password} onChange={handle}/>
        </div>
    )
}

export default Keypad;