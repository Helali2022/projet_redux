import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTask = () => {
    const tasks=useSelector(store=>store.todo)
    console.log(tasks)
  return (
    <div>
        {tasks.map((el,i)=><Task key={i} task={el}/>)}
    </div>
  )
}

export default ListTask