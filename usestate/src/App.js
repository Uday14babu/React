import React, { useState } from "react";

const App=() => {
  const [count, setCount] = useState(0);
  const incNum=() =>{
    setCount(count + 1);
  };
  const decNum=() =>{
    setCount(count - 1);
  };
  return(
    <>
    <h2 className="text-center">Use State Hook</h2>
    <div className="text-center" style={{marginTop:"30vh"}}>
      <h1>{count}</h1><br/>
      <button onClick={decNum} className="btn btn-primary">Less</button>
      <button onClick={incNum} className="btn btn-primary">Add</button>
    </div>
    <div>
      <h2>Welcome to react</h2>
    </div>
    </>
  );
};
export default App;