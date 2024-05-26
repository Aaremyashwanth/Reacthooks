import React, { useState } from 'react'

const T_1usestate = () => {
    const[firstname,setfirstname]=useState('yashwa')
    const handle=()=>{
        setfirstname('rama')
    }
    const change=()=>{
        setfirstname('sham')
    }
  return (
    <div>
        {firstname}<br/>
        <input type="text" onChange={change} />
        <button onClick={handle}>submit</button>
    </div>
  )
}

export default T_1usestate