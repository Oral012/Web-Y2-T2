import React, { useState } from "react";
import Entity from "./Entity";
import GameOver from "./GameOver";
import Log from "./Log";

// ----------------------------------------------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------------------------------------------

// Generate a random values in the range {min, max}
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Create an attack log
function createLogAttack(isPlayer, damage) {
  return {
    isPlayer: isPlayer,
    isDamage: true,
    text: ` takes ${damage} damages`,
  };
}

// Create a healing log
function createLogHeal(healing) {
  return {
    isPlayer: true,
    isDamage: false,
    text: ` heal ${healing} life points`,
  };
}

export default function Game() {
  // ----------------------------------------------------------------------------------------------------------
  // STATES & VARIABLES
  // ----------------------------------------------------------------------------------------------------------
  const [playerHP, setPlayerHP] = useState(100);
  const [demonHP, setDemonHP] = useState(100);
  const [sp, setSP] = useState(3);
  const [logs, setLogs] = useState([]);

  const isGameOver = playerHP <= 0 || demonHP <= 0;
  const gameOverTitle = playerHP <= 0 ? "Monster won" : "Player won";

  
  const handleAtt = () => {

    const playerD = getRandomValue(5, 8);
    const demonD = getRandomValue(8, 12);
    
    setDemonHP((prevHP) => (prevHP - playerD > 0) ? prevHP - playerD : 0);
    setPlayerHP((prevHP) => (prevHP - demonD > 0) ? prevHP - demonD : 0);
    setLogs((prevLogs) => [
      createLogAttack(false, playerD),
      createLogAttack(true, demonD),
      ...prevLogs
    ]);
    setSP((prevSP) => (prevSP > 0 ? prevSP - 1 : 3));
  };

  const handleHL = () => {
    const heal = getRandomValue(8, 15);

    const demonD = getRandomValue(8, 12);
    setPlayerHP((prevHP) => (prevHP - demonD > 0) ? prevHP - demonD : 0);
    setPlayerHP((prevHP) => (prevHP + heal > 100 ? 100 : prevHP + heal));
    setLogs((prevLogs) => [createLogHeal(heal),createLogAttack(true, demonD), ...prevLogs]);
  };

  const handleSP = () => {
    const playerD = getRandomValue(8, 25);
    const demonD = getRandomValue(8, 12);
    setDemonHP((prevHP) => prevHP-playerD > 0 ? prevHP - playerD : 0);
    setPlayerHP((prevHP) => (prevHP - demonD > 0) ? prevHP - demonD : 0);
    setLogs((prevLogs) => [
      createLogAttack(false, playerD),
      createLogAttack(true, demonD),
      ...prevLogs
    ]);
    setSP(3);
  };

  const handleSelfKilling = () => {
    setPlayerHP(0);
  };

  const restartGame = () => {
    setPlayerHP(100);
    setDemonHP(100);
    setSP(3);
    setLogs([]);
  };

  // ----------------------------------------------------------------------------------------------------------
  // MAIN TEMPLATE
  // ----------------------------------------------------------------------------------------------------------
  return (
    <>
      <Entity healthPT={demonHP} Character="Monster" />
      <Entity healthPT={playerHP} Character="Your" />

      {!isGameOver ? (
        <section id="controls">
          <button onClick={handleAtt}>ATTACK</button>
          <button disabled={sp !== 0} onClick={handleSP}>
            SPECIAL !
          </button>
          <button onClick={handleHL}>HEAL</button>
          <button onClick={handleSelfKilling}>KILL YOURSELF</button>
        </section>
      ) : (
        <GameOver title={gameOverTitle} restartGame={restartGame} />
      )}

      <Log logs={logs} />
    </>
  );
}
