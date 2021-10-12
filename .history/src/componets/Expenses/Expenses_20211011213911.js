import ExpenseItem from "./ExpenseItem";
import React, { useState } from 'react';

import "../../style/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
const [filteredYear, setFilteredYear] = useState("2021");
  //stored it in a state
  const onFilterExpenseYearHandler = (selectedYear) =>{
 
    setFilteredYear(selectedYear)
  }
  return (
    <div>
      
      
    {/* 从app.js 传数据给expenses，再传数据给expenseItem，这是parent-child */}
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onFilterExpenseYear = {onFilterExpenseYearHandler}/>
    props.items is array of expenses
{props.items.map((expense)) }
      <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      ></ExpenseItem>
    </Card></div>
  );
};

export default Expenses;
