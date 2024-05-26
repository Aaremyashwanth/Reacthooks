import React,{useContext} from 'react'
import { store } from '../../App'
const Components = () => {
    const[name,setname]=useContext(store)
  return (
    <div>Components A{name}</div>
  )
}

export default Components