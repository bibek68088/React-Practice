
import { useState } from 'react';
import './App.css'

function App() {

  function handleClick(){
    // console.log("Clicked");
    setHeadingText("Submitted");
  }
  function handleOnMouseOver(){
    // bg black
    console.log("Mouse over");
    setMouseOver(true);
  }

  function handleOnMouseOut(){
    // bg white
    console.log("Mouse out");
    setMouseOver(false);
  }

  /*---------Change the text-------*/
  const [headingText, setHeadingText] = useState("Hello"); 

  /*--------Change the mouse functionality-------*/
  const [mouseMovement, setMouseMovement]  = useState("Submit");

  const [isMouseOver, setMouseOver] = useState(false);


  return (
    <>
      <div className='container'>
        <h1>{headingText}</h1>
        <input type="text" placeholder="Whats your name?" />
        <button     
        onClick={handleClick}
        onMouseOut={handleOnMouseOut}
        onMouseOver={handleOnMouseOver}
        style={{backgroundColor: isMouseOver ? "black" : "white"}}
        >  
        {mouseMovement}</button>
      </div>

    </>
  );
}

export default App
