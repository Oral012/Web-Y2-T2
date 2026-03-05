import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const[aValue, setA]= useState(0);
  const [bValue, setB]= useState(0);
  const [isStr, setRed] = useState(false)
  /* You will need some function to handle the key pressed and button events */

const onA = (e)=>{setA(e.target.value)};
const onB = (e)=>{setB(e.target.value)};
const sum = (aValue,bValue) =>{
  if(isNaN(aValue)&&isNaN(bValue)) return aValue + bValue;
  else {
    setRed(true);
    return "A and B shell be number!"
  }
}
const compute = ()=> sum();
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B = </label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={sum} style={{color: isStr ? "red": ""}}/>
      <button onClick={compute}>Compute</button>
    </main>
  );
}

export default App;
