import React, {useEffect, useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({handleClick}) {
  const [sushiData, setSushiData] = useState([]);
  const [iteration, setIteration] = useState(0)
  useEffect(() => {
    fetch('http://localhost:3001/sushis')
  .then(response => response.json())
  .then(data => {
    let items = data.slice(iteration,iteration+4);
    setSushiData(items);
  });
  }, [iteration])
  const handleSushiRender = sushiData.map(e=>{
      return <Sushi key={e.id} sushi={e} handleClick={handleClick}></Sushi>
  })
  return (
    <div className="belt">
      {handleSushiRender}
      <MoreButton setSushiData={setSushiData} setIteration={setIteration} iteration={iteration}/>
    </div>
  );
}

export default SushiContainer;
