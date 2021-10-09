import "../../style/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    //从expenseform
    const onSaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        console.log(expenseData)
    }
return(
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
    </div>
)
}
export default NewExpense;