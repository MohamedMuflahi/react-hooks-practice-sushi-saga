import React,{useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [money, setMoney] = useState(100);
  const [plates, setPlates] = useState([]);
  function handleClick(price){
    if((money-price) >= 0){
      setMoney(money=> money-price);
      setPlates([...plates,1])
      return true;
    }else{
      return false;
    }
  }
  return (
    <div className="app">
      <SushiContainer handleClick={handleClick}/>
      <Table plates={plates} money={money}/>
    </div>
  );
}

export default App;
