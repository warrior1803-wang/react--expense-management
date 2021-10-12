import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";

import "../../style/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  //stored it in a state
  const onFilterExpenseYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  //hint1: filter method hint2: should not change the overall expense array, sub array for the chosen filter
  return (
    <div>
      {/* 从app.js 传数据给expenses，再传数据给expenseitems，这是parent-child */}
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterExpenseYear={onFilterExpenseYearHandler}
        />
        {/* props.itemss is array of expenses */}
        {props.items.map((expense) => (
          <ExpenseItem
          key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
         {props.items.filter((year) => (
          <ExpenseItem
          key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={filteredYear}
          />
        ))}
        
        
   
      </Card>
    </div>
  );
};

export default Expenses;
