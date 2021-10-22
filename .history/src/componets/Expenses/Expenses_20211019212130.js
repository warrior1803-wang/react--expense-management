import React, { useState } from "react";
import ExpenseList from "./ExpenseList"
import "../../style/Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "../../style/ExpenseLsi.css";

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
 
  return (
    <div>
      {/* 从app.js 传数据给expenses，再传数据给expenseitems，这是parent-child */}
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterExpenseYear={onFilterExpenseYearHandler}
        />
      <ExpenseList filteredData = {filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;