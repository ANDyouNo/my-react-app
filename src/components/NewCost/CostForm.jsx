import React, { useState } from "react";
import "./CostForm.css";

function CostForm() {
  // const [name, setName] = useState('')
  // const [amount, setAmount] = useState('')
  // const [date, setDate] = useState('')

  const [userInput, setUserInput] = useState({
    name: "",
    amouunt: "",
    date: "",
  });

  const nameChangeHandler = (event) => {
    setUserInput((previousState) => {
      return {
        ...previousState,
        amount: event.target.value,
      };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((previousState) => {
      return {
        ...previousState,
        amount: event.target.value,
      };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((previousState) => {
      return {
        ...previousState,
        amount: event.target.value,
      };
    });
  };

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
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Summ</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
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
