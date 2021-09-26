import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
    return(
        <div className="expenses">
            <ExpenseItem title={props.title}></ExpenseItem>
        </div>
    )
}

export default Expenses;
