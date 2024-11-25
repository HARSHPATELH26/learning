import React from 'react'
import '../App'
import { useState } from 'react';

const Sidebar = (pro) => {



  return (
    
    <div className='container'>
      <img src={pro.imgSrc}/>
      <h2>{pro.name}</h2>
      <h3>{pro.cost}</h3>
    </div>

    
   
  )
}

export default Sidebar



