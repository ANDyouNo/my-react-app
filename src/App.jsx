import NewCost from "./components/NewCost/NewCost";
import CostList from "./components/Costs/CostList";
import React, {useState} from "react";

const INIT_COSTS = [
  {
    id: 'c1',
    date: new Date(2023, 2, 23),
    description: "Notebook",
    amount: 999,
  },
  {
    id: 'c2',
    date: new Date(2022, 9, 12),
    description: "Mouse",
    amount: 50,
  },
  {
    id: 'c3',
    date: new Date(2021, 5, 30),
    description: "Microphone",
    amount: 100,
  },
];

const App = () => { //возможна стрелочная запись
  

  const [costs, setCosts] = useState(INIT_COSTS)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    })
    console.log(cost)
    
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <CostList cost={costs}></CostList>
    </div>
  );
}

export default App;
