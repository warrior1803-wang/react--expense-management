import ExpenseItem from "./ExpenseItem";
import "../../style/ExpenseList.css";

const ExpenseList = (props) => {
  let expenseContent = <p>No expenses found.</p>;
  if (props.filteredData.length === 0) {
    expenseContent =;
  }
  return <ul className="expenses-list">
     { props.filteredData.length > 0 &&
      props.filteredData.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
  </ul>
};


export default ExpenseList;