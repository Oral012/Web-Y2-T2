import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const[aValue, setA]= useState(0);
  const [bValue, setB]= useState(0);
  const [isStr, setRed] = useState(false)
  const [SUM, setsum] = useState(0);
  /* You will need some function to handle the key pressed and button events */
const onA = (e)=>{setA(Number(e.target.value))};
const onB = (e)=>{setB(Number(e.target.value))};
const sum = (aValue,bValue) =>{
  if(!isNaN(aValue)&&!isNaN(bValue)) {
    setRed(false);
    return aValue + bValue
  }
  else {
    setRed(true);
    return "A and B shell be number!"
  }
}
const Compute = ()=>setsum (sum(aValue,bValue));
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onChange={onA} />

      <label>B =</label>
      <input onChange={onB} />

      <label>A + B = </label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={SUM} style={{color: isStr ? "red": "white"}}/>
      <button onClick={Compute}>Compute</button>
    </main>
  );
}

export default App;
