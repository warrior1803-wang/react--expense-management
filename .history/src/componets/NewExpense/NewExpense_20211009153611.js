import "../../style/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
return(
    <div className="new-expense">
        <ExpenseForm onSaveExp enseData></ExpenseForm>
    </div>
)
}
export default NewExpense;