import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else{
      setCount(0)
      
    }
  };
  return (
    <div className="container">
      <div>
        <p>{count}</p>
        <div className="success">
          <button onClick={handleIncrement} className="pum">
            increase
          </button>
          <button onClick={handleDecrement} className="pum2">
            decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
