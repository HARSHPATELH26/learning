import React from 'react'

const Method = () => {

    let arr1 = [1,2,3,4,5,6,7,8,9];

let newarray = arr1.filter((num)=>{
    return num%2==0;
})
console.log(newarray);
// console.log(arr5);
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
// console.log(doubled); // Output: [2, 4, 6, 8]

let arr3 = arr1.filter((ele)=>{
    return ele%2!==0;
})
console.log( arr3);

  return (
    <div>
      {
        arr1.filter((elem)=>{
            return elem%2 !==0
        })
      }
    </div>
  )
}

export default Method;
