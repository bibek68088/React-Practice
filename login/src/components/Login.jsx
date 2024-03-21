import Input from "./Input";

const Login = () => {
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
        <button type='submit'>Login</button> 
        </form> 
    </div>
  )
}

export default Login;