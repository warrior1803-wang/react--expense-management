import React, { useState } from "react";

import "../../style/ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [enteredYear, setEnteredYear] = useState("");
  const selectHandler = (event) => {
    //  event.preventDefault();
    // setEnteredYear(event);
    console.log(event.target.options[event.target.options.selectedIndex].value);
    const year =event.target.options[event.target.options.selectedIndex].value;
    setEnteredYear(year);
    props.onFilterExpenseYear(enteredYear);
  
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
