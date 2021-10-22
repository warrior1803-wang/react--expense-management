import "../../style/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  //从expenseform用onsaveExpenseData传数据，是child-parent

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);

  };
  const cliked = true;
  const onChangeForm=(event) =>{
    cliked = !cliked
    console.log(cliked)
  }
  return (
    <div className="new-expense">
      <div className="newExpense"><button onClick={onChangeForm}>New Expense</button></div>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};
export default NewExpense;
