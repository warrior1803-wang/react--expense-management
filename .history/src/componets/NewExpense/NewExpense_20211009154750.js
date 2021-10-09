import "../../style/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    const onSaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        console.log(expenseData)
    }
return(
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData></ExpenseForm>
    </div>
)
}
export default NewExpense;