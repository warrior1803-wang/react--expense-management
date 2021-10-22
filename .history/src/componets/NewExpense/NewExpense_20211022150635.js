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
    setchange(!change);
  };
  const [change, setChange] = useState(false);

  const stateChangeHandler = () => {
    setchange(!change);
    console.log(change);
  };
  // const stopEditingHandler = () => {
  //   setchange(false);
  // };
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
