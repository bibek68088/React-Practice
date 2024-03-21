import { useState } from 'react'
import './App.css'


// show time as a block
// upon clicking change the block time to current time using hooks

function App() {
  var now = new Date().toLocaleTimeString();


  const [time, setTime] = useState(now);

  function getTime(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  

  return (
    <>
      <div>
        <h1>{time}</h1>
        <button onClick={getTime}>Get Time</button>
      </div>
    </>
  )
}

export default App
