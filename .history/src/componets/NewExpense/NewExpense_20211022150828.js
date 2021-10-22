import "../../style/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  //从expenseform用onsaveExpenseData传数据，是child-parent

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setChange(!change);
  };
  const [change, setChange] = useState(false);

  const stateChangeHandler = () => {
    setChange(!change);
    console.log(change);
  };
  // const stopEditingHandler = () => {
  //   setChange(false);
  // };
  return (
    <div className="new-expense">
      {<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        
      </body>
      </html>change && <button onClick={stateChangeHandler}>New Expense</button>}

      {change && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onChangeState={stateChangeHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};
export default NewExpense;
