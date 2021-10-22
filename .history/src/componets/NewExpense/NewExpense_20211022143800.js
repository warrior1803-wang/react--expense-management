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
  };
  const [change, setchange] = useState("false");

  const stateChangeHandler = () => {
    setchange("true");
    console.log(setchange);
  };

  return (
    <div className="new-expense">
      {
        ({ change } = true ? (
          <div className="newExpense">
            <button onClick={stateChangeHandler}>New Expense</button>
          </div>
        ) : (
          <ExpenseForm
            onSaveExpenseData={onSaveExpenseDataHandler}
            onChangeState={stateChangeHandler}
          ></ExpenseForm>
        ))
      }
    </div>
  );
};
export default NewExpense;
