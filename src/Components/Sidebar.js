import React, { useState } from 'react'
import '../App'


const Sidebar = () => {

  const [data2,setData2] = useState([
    {name : "Ramesh", id : "1001", num : "12345556"},
    {name : "Suresh", id : "1002", num : "124546556"},
    {name : "Mahesh", id : "1003", num : "123453356"},
    {name : "Kamlesh", id : "1004", num : "12365456"}

]);
const deleteHandler = (ind)=>{
  const newArray = data2.filter((elem, key)=>{
    return key !== ind;
  })
  setData2(newArray)
  console.log(newArray);
}

  return (
    
    <div>
      {
        data2.map((elem,index)=>{
          return(
            <div className='sidebar'>
              <h1>{elem.name}</h1>
              <h3>{elem.id}</h3>
              <h3>{elem.num}</h3>
              <hr/>
              <button onClick={()=>deleteHandler(index)}>Delete</button>
            </div>
            
          )
        })
      }
    </div>

    
   
  )
}

export default Sidebar



