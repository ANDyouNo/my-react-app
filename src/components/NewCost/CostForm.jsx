import React, { useState } from "react";
import "./CostForm.css";

function CostForm(props) {
  const [userInputName, setUserInputName] = useState('')
  const [userInputAmount, setUserInputAmount] = useState('')
  const [userInputDate, setUserInputDate] = useState('')

  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   amouunt: "",
  //   date: "",
  // });

  const nameChangeHandler = (event) => {
    setUserInputName(event.target.value)
  };
  const amountChangeHandler = (event) => {
    setUserInputAmount(event.target.value)
  };
  const dateChangeHandler = (event) => {
    setUserInputDate(event.target.value)
  };

  const submitHandler = (event) => {
    event.preventDefault()
    const costData = {
      name: userInputName,
      amount: userInputAmount,
      date: new Date(userInputDate)
    }
    props.onSaveCostData(costData)
    setUserInputName('')
    setUserInputAmount('')
    setUserInputDate('')
  }
  // const nameChangeHandler = (event) => {
  //   setName(event.target.value)
  // }
  // const amountChangeHandler = (event) => {
  //   setAmount(event.target.value)
  // }
  // const dateChangeHandler = (event) => {
  //   setDate(event.target.value) 
  // }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" value={userInputName} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Summ</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInputAmount}
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
            value={userInputDate}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add Rashod</button>
        </div>
      </div>
    </form>
  );
}

export default CostForm;
