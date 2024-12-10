import React from 'react'
import { useSelector } from 'react-redux'

const RTK = () => {
  const products1 = useSelector(state=>state.pr);
  return (
    <div>
      {
        products1.map((elem,index)=>{
          return(
            <div className='sidebar'>
              <h1>{elem.name}</h1>
              <h3>{elem.id}</h3>
              <h3>{elem.num}</h3>
              <hr/>
              <button >Delete</button>
            </div>
            
          )
        })
      }
    </div>
  )
}

export default RTK
