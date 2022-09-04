import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../redux/todoSlice';

const AddTask = () => {
    const dispatch=useDispatch()
    const [text, setText] = useState("");
  return (
    <div>
        <input onChange={(e)=>setText(e.target.value)} type={"text"} placeholder="Write yout task here.."/>
          <button onClick={() => dispatch(add({ id: 0, description: text, isdone: false }))}>Add Task</button>
    </div>
  )
}

export default AddTask