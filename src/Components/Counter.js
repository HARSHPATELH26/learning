import React, { useState } from 'react'
import '../App.css';

const Counter = () => {

  let [i, setCnt] = useState(1);
      const calc = (operator) => {
        if (operator === "+") {
          setCnt(++i);
        } else {
          setCnt(--i);
        }
      }
        return (
          <div className='counter'>
            <h1 >{i}</h1>
            <button onClick={() => calc("+")}> Add </button>
            <button onClick={function () { return (calc("-")) }}> Substract </button>
          </div>
        )

  }
        


export default Counter;