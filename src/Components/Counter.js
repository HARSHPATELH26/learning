import React, { useState } from 'react'
import '../App.css';

const Counter = () => {
    
   let [i, setCnt]  = useState(1);

   const add =()=>{
        setCnt( ++i);
        console.log(i);            
   }
        
  return (
    <div className='counter'>
        <h1 >{i}</h1>
      <button onClick={add}> Add </button>
    </div>
  );
}

export default Counter;
