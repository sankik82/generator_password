import React, { useState } from "react"
import './App.css';

function App() {

  const [state,setState] = useState(" ");

  const generatorPassword = ()=>{
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

    for(let index = 1;index <=8; index++){
         let char = Math.floor(Math.random() * string.length);
        setState (pass = pass + string.charAt(char));

    }
  
  }

  const cpyFunc = ()=>{
    navigator.clipboard.writeText(state)
  }
  return (
    <div className="container">
      <h2>Randome Password Generator App</h2>
      <input type="text" readOnly disabled name="" placeholder='Password' id=""  value={state}/>
      <div className="btns">
        <button onClick={generatorPassword}>Generat Password</button>
        <button onClick={cpyFunc}>Copy Password</button>
      </div>
    </div>
  );
}

export default App;
