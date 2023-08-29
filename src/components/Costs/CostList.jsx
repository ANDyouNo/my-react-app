import CostItem from "./CostItem";
import "./CostList.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostsDiagram from "./CostsDiagram";

function CostList(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filtredCosts = props.cost.filter(cost => {
    return cost.date.getFullYear().toString() === selectedYear;
  })

  let costContent = <p>В этом году расходов нет</p> 

  if (filtredCosts.length > 0) {
    costContent = filtredCosts.map((cost) => (
      <CostItem
        key={cost.id}
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
      ></CostItem>
    ))
  }

  return (
    <Card className="costs">
      <CostsFilter
        year={selectedYear}
        onChangeYear={yearChangeHandler}
      ></CostsFilter>
      <CostsDiagram costs={filtredCosts} />
      {costContent}
    </Card>
  );
}

export default CostList;
