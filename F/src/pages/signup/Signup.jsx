import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <center className='signup-container'>
    <div class="field required">
    <label for="id_username">Username</label><br/>
    <input type="text" name="username" id="id_username" value="test" />
    </div>
<div class="field required">
    <label for="id_password">Password</label><br/>
    <input type="password" name="password" id="id_password" value="test" />
</div>

<div class="field">
    <label for="id_email">Email</label><br/>
    <input type="text" name="email" id="id_email" /><br/><br/>
</div>
    <Link to='/login'><button>submit</button></Link>
    </center>
    </div>
    
  )
}

export default Signup