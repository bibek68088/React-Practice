import React from 'react'
import Input from './Input'


const Register = () => {
  return (
    <div>
         <form className='form'>
        <Input
        type = "Text"
        placeholder = "Username"
        />
        <Input
        type = "Password"
        placeholder = "Password"
        />
        <Input
        type = "confirm password"
        placeholder = "Confirm Password"
        />
        <button type='submit'>Register</button> 
        </form> 
    </div>
  )
}

export default Register;