import "../../style/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    //从expenseform用onsaveExpenseData传数据，是child-parent
    
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