import "../../style/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
return(
    <div className="new-expense">
        <ExpenseForm onSaveData></ExpenseForm>
    </div>
)
}
export default NewExpense;