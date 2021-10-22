import { useState } from "react";
import "../../style/NewExpenseForm.css";

const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  //eslint-disable-next-line
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,

  //   });
  // };
  //eslint-disable-next-line
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value,

  //   });
  // };
  //eslint-disable-next-line
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //   setUserInput({
  //     ...userInput,
  //     enteredDate: event.target.value,

  //   });
  // };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
    //Operator + 可用于将变量转换为数字：或者Number（）
      amount: Number(enteredAmount,
      date: new Date(enteredDate),
    };
      //typeof 查数据类型
    // console.log(typeof(expenseData.amount))
  props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    
  };
  return (
    <form onSubmit={submitHandler}>
      
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
           value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
       <button type="button" onClick={props.onChangeState}>Cancel</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
