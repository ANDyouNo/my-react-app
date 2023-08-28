import CostItem from "./CostItem";
import "./CostList.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";

function CostList(props) {

  const [selectedYear, setSelectedYear] = useState('2021')
 
  const yearChangeHandler = (year) => {
    setSelectedYear(year)
  }

  return (
      <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} ></CostsFilter>
        {props.cost.map(cost => 
          <CostItem
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        ></CostItem>
        )}
      </Card>
  );
}

export default CostList