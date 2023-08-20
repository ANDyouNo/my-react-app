import NewCost from "./components/NewCost/NewCost";
import CostList from "./components/Costs/CostList";

const App = () => { //возможна стрелочная запись
  const costs = [
    {
      date: new Date(2023, 2, 23),
      description: "Macbook",
      amount: 999,
    },
    {
      date: new Date(2022, 9, 12),
      description: "Mouse",
      amount: 50,
    },
    {
      date: new Date(2021, 5, 30),
      description: "Microphone",
      amount: 100,
    },
  ];
  return (
    <div>
      <NewCost />
      <CostList cost={costs}></CostList>
    </div>
  );
}

export default App;
