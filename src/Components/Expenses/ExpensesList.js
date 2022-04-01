import React from "react";

import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css';

const ExpensesList = (props) => { 

  if (props.items.length === 0) {
    return (<h2 className="expenses-list__fallback">No expenses found. Please select other year</h2>)
  } 

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (<ExpenseItem key={expense.id} id={expense.id} title={expense.title} amount={expense.amount} date={expense.date} onDelete={props.onDelete}/>))}
    </ul>
    )
  
};

export default ExpensesList