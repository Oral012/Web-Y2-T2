import React, { useState } from "react";

export default function App() {
  const [scoreWidth,setScorewidth]= useState(`0%`);
  const [value,setValue]= useState(0);
  const getScoreBarStyle = () => {
    // 1- Compute width
    
    // setScorewidth(`${value}%`)
    // 2- Compute color (optional)
    
    let scoreColor;
    if (value <= 3) {
      scoreColor = '#ff0000'; // red
    } else if (value <= 6) {
      scoreColor = '#f3bc47'; // yellow
    } else {
      scoreColor = '#00ff00'; // green
    }
    
    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };
  const getValue = (e)=>{
    const v = e.target.value;
     setValue(v)
     setScorewidth(`${v*10}%`)
     console.log(v)
    }

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10"  onChange={getValue}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
