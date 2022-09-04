import React from 'react'

const Task = ({task}) => {
  return (
    <div>
        <h1>{task.description}</h1>
        <span>{task.isdone ? "OK" :null}</span>
    </div>
  )
}

export default Task