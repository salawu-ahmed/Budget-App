import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'

const ExpenseList = () => {
    const { expenseItems } = useContext(AppContext)
    // const expenses = [
    //     {
    //         id: 2223,
    //         name: "Shopping",
    //         cost: 50
    //     },
    //     {
    //         id: 2224,
    //         name: "Holiday",
    //         cost: 900
    //     },
    //     {
    //         id: 2225,
    //         name: "Transportation",
    //         cost: 400
    //     },
    //     {
    //         id: 2226,
    //         name: "Fuel",
    //         cost: 70
    //     },
    //     {
    //         id: 2227,
    //         name: "Child Care",
    //         cost: 40
    //     },
    // ]
  return (
    <ul className='list-group'>
      {
        expenseItems.map(({id, name, cost}) => (
            <ExpenseItem key={id} id={id} name={name} cost={cost}/> 
        ))
      }
    </ul>
  )
}

export default ExpenseList
