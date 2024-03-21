
import { useState } from 'react';
import './App.css'

function App() {

  const [name, setName] = useState("");

  const [headingText, setHeadingText]  = useState("");

  const isSubmitclicked = false;

  function handleChange(){
    console.log("Changed");
    setName(event.target.value);
  }

  function handleClick(){
    setHeadingText(name);
  }

  return (
    <>
      <div className='container'>
        {/**-------onclick of submit change the header title----------- */}
        <h1>Hello {headingText}!</h1>
        <input
        onChange={handleChange}
        type="text"
        value={name}
        placeholder="Whats your name?" />
        <button
        onClick={handleClick}
        >  
        Submit</button>
      </div>

    </>
  );
}

export default App
