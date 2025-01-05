import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
  return (
    <div>
        <h1>ishan</h1>
      {
        count
      }
    </div>
  )
}

export default Counter
