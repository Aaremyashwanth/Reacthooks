

import React, {useReducer}from 'react';

const reducer=(state,action)=>{
  if(action.type==="del"){
   const newperson= state.data.filter((eachperson)=>{
    return   action.payload !==eachperson.id;
   })
   return(
    {...state,
      data: newperson,
      length:state.length-1
    }
   )
  }
}
const Usereduc = () => {
    
   
    const intialState={
        data:[{
            id:"22222",
            name:"yashwanth",
            location:"yld",
        },
        {
            id:"33333",
            name:"yashrock",
            location:"hyd",
        }
    ],length:2
    }
    const [state,dispatch]=useReducer(reducer,intialState);
    const handledelete=(id)=>{
      dispatch({
        type:"del",
        payload:id
      })
    }

  return (
    <div>
     <h1>final:{state.length}</h1> 
      {state.data.map((each)=>{
        const {id,name,location}=each;
        return (
        <div key={id}>
            <div>{name}</div>
            <div>{location}</div>
            <button onClick={()=>handledelete(id)}>submit</button>
        </div>)
      })}
    </div>
  )
}

export default Usereduc
