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
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  //hint1: filter method hint2: should not change the overall expense array, sub array for the chosen filter
  let expenseContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expenseContent =
      filteredExpenses.length > 0 &&
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
  }
  return (
    <div>
      {/* 从app.js 传数据给expenses，再传数据给expenseitems，这是parent-child */}
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterExpenseYear={onFilterExpenseYearHandler}
        />
        {/* props.itemss is array of expenses */}
        {some people look serious on the outside, 
        but they are checking celebrty gossip}
       {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
