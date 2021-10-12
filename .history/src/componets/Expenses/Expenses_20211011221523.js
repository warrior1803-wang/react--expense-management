import ExpenseItem from "./Expenseitem";
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
          <Expenseitem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
   
      </Card>
    </div>
  );
};

export default Expenses;
