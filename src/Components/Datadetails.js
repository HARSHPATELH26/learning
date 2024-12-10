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
 
}

const [firstName, setFirstName] = useState("A");
const [middleName, setMiddleName] = useState("B");
const [lastName, setLastName] = useState("C");
const [fullName, setFullName] = useState("Full Name Please");

const fname = (e)=>{
    setFirstName(e.target.value)
    console.log(firstName);
}
const mname = (e)=>{
    setMiddleName(e.target.value)
    console.log(e.target.value);
}
const lname = (e)=>{
    setLastName(e.target.value)
    console.log(lastName);
}

const showData = () => {
    // Concatenate first name and last name
    setFullName(`${firstName} ${middleName} ${lastName}`);
};

// let [data3,setData3] = useState("No Data");
// const showData = (e)=>{
//   console.log(e.target.value);
//   setData3(e.target.value);  
// }data1= [0,1,2,3,4,5]
    return (
        <div className='counter'>
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
            <h1>{fullName}</h1>
            <hr/>
            <div>
                <input type="text" placeholder="First Name" value={firstName} 
                    onChange={fname} 
                />
                 <input type="text" placeholder="Middle Name" value={middleName} 
                    onChange={mname} 
                />
                <input type="text" placeholder="Last Name" value={lastName} 
                    onChange={lname} 
                />

            </div>
            <button onClick={showData}>Enter</button>
        </div>
    )
}

export default Datadetails

