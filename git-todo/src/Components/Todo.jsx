import React, { useState } from 'react'
import List from './List'
function Todo() {
    const [input,setinput]=useState("")
    const[list,setlist]=useState([])
    const handlesubmit=()=>{
        setlist([...list,input])
        setinput("")
    }
  return (
    <div>
      <input type="text" 
      value={input}
      placeholder='Enter your task'
      onChange={(e)=>setinput(e.target.value)}
      />
      <button onClick={handlesubmit}>press</button>
      <List items={list} />
    </div>
  )
}

export default Todo
