import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
    return(
        <div className="expenses">
            <ExpenseItem title={props.title}
            amount = {props.amount}></ExpenseItem>
        </div>
    )
}

export default Expenses;
