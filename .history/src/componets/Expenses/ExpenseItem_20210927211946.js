import "../../style/ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from 'react';

const ExpenseItem = (props) => {
  const [title,setT] = useState(props.title);
 

 const clickHandler = () =>{
   
 }
  
    return (
      <Card className='expense-item'>
     <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
          <h2 >{title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>change </button>
      </Card>
    );
  }
  
  export default ExpenseItem;