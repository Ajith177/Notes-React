import React from 'react'

const Output = ({state,setState}) => {

 function del(value){
    const deletes=state.filter((ele)=>ele.title!==value.title)
    setState(deletes)
 }


  return (
    <div>
      {state.map((value)=>{
        console.log(value)
        return(
            <>
            <div>
                <h1>{value.title}</h1>
                <p>{value.content}</p>
                <button onClick={()=>edit(value)}>Edit</button>
                <button onClick={()=>del(value)}>Delete</button>
            </div>
            </>
        )
      })}
    </div>
  )
}

export default Output
