import ExpenseItem from "./ExpenseItem"


const ExpenseList = (props) =>{
    let expenseContent = <p>No expenses found.</p>;
    if (<props className="filteredData"></props>.length > 0) {
      expenseContent =
        filteredData<props className="filteredData"></props>.length > 0 &&
        filteredData<props className="filteredData"></props>.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ));
    }
}