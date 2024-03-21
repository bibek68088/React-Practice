import React, { useState } from 'react'

const Options = () => {
    const [option, setOptions] = useState();

    function initialValue(){
        
    }
  return (
    <div>
        <select name="" id="">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
  )
}

export default Options