import React, { useState } from 'react'

const Datadetails = () => {

    const data1 = [
        {name : "Ramesh", id : "1001", num : "12345556"},
        {name : "Suresh", id : "1002", num : "124546556"},
        {name : "Mahesh", id : "1003", num : "123453356"},
        {name : "Kamlesh", id : "1004", num : "12365456"}

    ]
  let [flag, setSD] = useState(false);
const showHide = ()=>{
    setSD(flag = !flag)
    console.log(flag);
}

const sync = (e)=>{
    console.log(e);
    
}
    return (
        <div>
            {   flag ?
                data1.map((empData,key)=>{
                  return(
                    <div className='empData'>
                        <h2>{empData.name}</h2>
                        <h2>{empData.id}</h2>
                        <h2>{empData.num}</h2>
                    </div>
                  );
                    
                }) : <h1>Show data</h1>
            }
            <hr/>
            <button onClick={showHide} > {flag ? "Hide" : "Show"} </button>
            <hr/>
            <button onClick={sync}> Synthetic Event</button>
        </div>
    )
}

export default Datadetails

