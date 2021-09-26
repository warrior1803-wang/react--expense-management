import ExpenseItem from "./ExpenseItem";
import "../style/Expenses.css";
function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.title}
        amount={props.amount}
        date={props.date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
