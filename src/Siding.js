import React, { useState } from 'react'
// import Output from './Output'
import Output from './Output'
const Siding = () => {
const[title,setTitle]=useState("")
const[content,setContent]=useState("")
const[state,setState]=useState([])

function update(){
  if(title=="" || content==""){
    alert("Please enter a title")
  }
  else{
    setState((state)=>{
      alert("db")
      return[...state,{title,content}]
    })
  }
}


  return (
    <div className='complete-all'>
    <div className='complete'>
        <div className='division'> 
            <h3>NOTES Application</h3>
            <input type="text" placeholder="Enter the input" onChange={(event)=>setTitle(event.target.value)}  />
            <textarea type="textarea" className="textarea" placeholder="Enter the Description" onChange={(event)=>setContent(event.target.value)}/>
            <button type="submit" className="add" onClick={update}>ADD</button>
            
        </div>
    </div>
    {/* <h1>{title}</h1>
            <p>{content}</p> */}
            <Output state={state} setState={setState} />
</div>
  )
}

export default Siding


// import { useState } from 'react';
// import './App.css';
// const bg_color=['red','blue','yellow','black'];
// export const Toggle = () => {
//     const[isActive,setActive]=useState("");
//     function colorChange(item){
//         setActive(item)
//     }
//     return(
//         <div>
//             {bg_color.map((item)=>{
//                 return(
//                     <button onClick={()=>colorChange(item)}>{item}</button>
//                 )
//          })}
//          <div  className="toggleDiv"style={{background:isActive}}></div>
//         </div>

//     )

    


// }
