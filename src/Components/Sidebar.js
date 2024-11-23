import React from 'react'
import '../App'

const Sidebar = (props) => {




  return (
    
    <div className='container'>
      <img  className='pic' src = {props.imgSrc} alt={props.name}></img>
      <h2>{props.name}</h2>
      <h3>{props.cost}</h3>
    </div>

    
   
  )
}

export default Sidebar
