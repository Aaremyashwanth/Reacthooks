import axios, { Axios } from 'axios'
import React, { useEffect,useState } from 'react'

const Friendslist = () => {
    const [friend,setfriends]=useState([])
    useEffect(()=>{
        axios.get('api/home')
        .then((response)=>{
            setfriends(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    })
  return (
    <div>
        <h1>friends list from backend through api</h1>
        <h2>friend{friend.length}</h2>
      {friend.map((f)=>{
        return(
            <div key={f}>
                <h1>{f.name}</h1>
                <p>{f.age}</p>
                <p>{f.city}</p>
            </div>
        )
      })}
    </div>
  )
}

export default Friendslist
