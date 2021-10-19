import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  let expenseContent = <p>No expenses found.</p>;
  if (props.filteredData.length > 0) {
    expenseContent =props.filteredData.length > 0 &&
      propfilteredData.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
  }
};


export default ExpenseList;