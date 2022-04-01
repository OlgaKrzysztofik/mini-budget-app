import React, {useState} from 'react';

import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

import './App.css';

const INITIAL_EXPENSES = [
    {
      id: 'e1',
      title: 'Books',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2022, 2, 12),
    },
  ];

function App() {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => { 
    setExpenses(prevExpenses => [expense, ...prevExpenses])
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter((expense) => expense.id !== id);
      alert("OK, deleted!");
      return updatedExpenses;
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} onDelete={deleteExpenseHandler}/>
    </div>
  );
}

export default App;
