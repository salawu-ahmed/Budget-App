import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Budget = () => {
  const { budget } = useContext(AppContext)
  console.log(budget);
  return (
    <div className='alert alert-secondary'>
      <span>Budget: ${budget}</span>
    </div>
  )
}

export default Budget
