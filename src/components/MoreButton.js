import React from "react";

function MoreButton({setIteration}) {
  return <button onClick={()=>setIteration((iteration)=> iteration+4)}>More sushi!</button>;
}

export default MoreButton;
