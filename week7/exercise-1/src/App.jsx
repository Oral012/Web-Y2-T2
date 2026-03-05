import React from "react";
import { useState } from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
  const [isRainnning, setRain] = useState(true);

  function onSunClick() {
    // Complete this code when we click on Sunny Time
    setRain(false);
    console.log("clicked sun");
        getTitle()
    getBackgroundColor()
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    setRain(true);
    console.log("clicked rain")
    getTitle()
    getBackgroundColor()
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    const title = document.getElementById("title");
    if(isRainnning) title.textContent = "Sun Time!";
    else title.textContent = "Rain Time!";

  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    const bg = document.getElementById("background");
    if(isRainnning) bg.style.backgroundColor = "gold"
    else bg.style.backgroundColor = "blue";
  }

  return (
    <main id="background">
      <h1 id="title">TODO</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
