import NewCost from "./components/NewCost/NewCost";
import CostList from "./components/Costs/CostList";

const App = () => { //возможна стрелочная запись
  const costs = [
    {
      id: 'c1',
      date: new Date(2023, 2, 23),
      description: "Macbook",
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

  const addCostHandler = (cost) => {
    console.log(cost)
    console.log('app component')
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <CostList cost={costs}></CostList>
    </div>
  );
}

export default App;
