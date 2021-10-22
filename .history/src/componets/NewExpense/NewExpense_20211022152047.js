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
  let newExpenseBtn = 
  return (
    <div className="new-expense">
      
      {!change && <button onClick={stateChangeHandler}>New Expense</button>}

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
