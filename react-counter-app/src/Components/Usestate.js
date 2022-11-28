// import React from 'react'
// import { useState } from 'react'
// const Usestate = () => {
//     const[name,setName] = useState("Ankit")
//    const next = ()=>{
//        setName("abhishek");
//    };
//   const Prev = () => {
//     setName("Ankit");
//   };
  
//   return (
//    <>
//    <h1>Using Usestate</h1>
//     <h2>{name}</h2>
//      <button type="button" onClick={next}>Next</button>
//       <button type="button" onClick={Prev}>Previous</button>

   
//    </>
//   )
// }

// export default Usestate



import React from 'react'
import { useState } from 'react'
import '../Components/usestate.css'
const Usestate = () => {

  
  const [count,newCount] = useState(0)
  const add=()=>{
    newCount(count+1)
  }
  const dec = () => {
    if(count>0){
    newCount(count - 1)
    }
    else{
      newCount(0)
    }
  }
  return (
   <>
      <div className='box'>   
   <button type="button" onClick={add}>+</button>
   <span>{count}</span>
      <button type="button" id="btn1" onClick={dec}>-</button>
      </div>
      

   </>
  )
}

export default Usestate








