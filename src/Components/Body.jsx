import React, { useState } from "react";

function Body() {
  const [count, setCountValue] = useState(0); // Declare useState first

  const onIncrement = () => {
    console.log("Increment is pressed");
    setCountValue((prevCount) => prevCount + 1); // Use functional update
  };

  const onDecrement = () => {
    setCountValue((prevCount) => prevCount - 1); // Use functional update
  };

  return (
    <React.Fragment>
      <div onClick={onIncrement}>+</div>
      <div>{count}</div>
      <div onClick={onDecrement}>-</div>
    </React.Fragment>
  );
}

export default Body;
