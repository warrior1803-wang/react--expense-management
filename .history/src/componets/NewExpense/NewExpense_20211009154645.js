import "../../style/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    const onSaveExpenseDataHandler = (enteredExpenseData) =>{}
return(
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData></ExpenseForm>
    </div>
)
}
export default NewExpense;