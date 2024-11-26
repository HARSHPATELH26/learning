import React from 'react'
import '../App'


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



