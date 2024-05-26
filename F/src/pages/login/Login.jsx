import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
  return (
    <div className="login-container">
      <center >
        <h1>Login</h1>
       username:<br/>
      <input type="text" /><br/>
       Password: <br/>
       <input type="password" /><br/><br/>
       <Link to="/home"><button>login</button></Link>
       </center>
    </div>
  )
}

export default Login