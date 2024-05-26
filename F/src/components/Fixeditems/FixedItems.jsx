import React, { useState } from 'react'
import {fixedImages} from '../../assets/data'
import './FixedItem.css'
const FixedItems = () => {
    const [item,setitem]=useState(fixedImages)
    
  return (
    <div>
        <div className="itemSection">
            {item.map((item)=>{
                return(
                    <div className="gallery" key={item}>
                        <img src={item.item} alt="" />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default FixedItems