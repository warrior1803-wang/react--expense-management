import ExpenseItem from "./ExpenseItem"


const ExpenseList = (props) =>{
    let expenseContent = <p>No expenses found.</p>;
    if (props.filteredExpenses.length > 0) {
      expenseContent =
        filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ));
    }
}