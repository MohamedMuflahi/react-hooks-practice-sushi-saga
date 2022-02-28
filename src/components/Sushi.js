import React, { useState } from "react";

function Sushi({sushi,handleClick}) {
  const [isEaten, setIsEaten] = useState(false);
  return (
    <div className="sushi">
      <div className="plate" onClick={()=>{
        if (handleClick(sushi.price)) {
          setIsEaten(true);
        }        
}}>
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
