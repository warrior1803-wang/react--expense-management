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
  let [change, setchange] = useState("false");

  const stateChangeHandler = () => {
    
    setchange("true");
    console.log(change);
  };

  return (
    <div className="new-expense">

      
            <button onClick={stateChangeHandler}>New Expense</button>
          
     
          <ExpenseForm
            onSaveExpenseData={onSaveExpenseDataHandler}
           
          ></ExpenseForm>
        )
      }
    </div>
  );
};
export default NewExpense;