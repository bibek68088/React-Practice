import Login from './components/Login';
import Input from './components/Input';
import Register from './components/Register';
import './App.css'

// check for login

var isLoggedIn = false;

var isUserRegistered = true;

// function renderConditionally(){
//   if(isLoggedIn === true){
//     return <h1>Hello</h1>
//   }else{
//     return <Login />;
//   }
// }


function App() {

  return (
    <>
      <div className='container'>
                
    {/* for login
     isLoggedIn ? <h1>Hello</h1> : <Login /> 
     */}

    {isUserRegistered ?  <Login /> : <Register />}
      </div>

    </>
  )
}

export default App;
