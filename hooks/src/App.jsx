import React from 'react'
import { useState } from 'react';


const App = () => {
 
const [count, setCount] = useState(0);

function Decrease(){
  setCount(count - 1);
}
function Increase(){
  setCount(count + 1);
}

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={Decrease}>-</button>
        <button onClick={Increase}>+</button>
    </div>
  )
}

export default App