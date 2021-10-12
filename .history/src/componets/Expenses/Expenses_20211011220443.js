import Expenseitems from "./Expenseitems";
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
      
      
    {/* 从app.js 传数据给expenses，再传数据给expenseitems，这是parent-child */}
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onFilterExpenseYear = {onFilterExpenseYearHandler}/>
    {/* props.itemss is array of expenses */}
{props.items.map((expense => <Expenseitems =title/>)) }
      <Expenseitems
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></Expenseitems>
      <Expenseitems
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></Expenseitems>
      <Expenseitems
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></Expenseitems>
      <Expenseitems
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></Expenseitems>
    </Card></div>
  );
};

export default Expenses;
