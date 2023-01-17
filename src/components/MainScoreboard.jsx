import "./MainScoreboard.css";

import { useRef } from "react";

import { useGameContext } from "../hooks/useGameContext";

export const MainScoreboard = () => {
  const [gameContext, updateGameContext] = useGameContext();

  const refParButton = useRef(null);
  const refImparButton = useRef(null);

  const selectPar = () => {
    refParButton.current.classList.add("rainbow");
    refImparButton.current.classList.remove("rainbow");
    updateGameContext({
      ...gameContext,
      penaltySelection: "PAR",
    });
  };

  const selectImpar = () => {
    refParButton.current.classList.remove("rainbow");
    refImparButton.current.classList.add("rainbow");
    updateGameContext({
      ...gameContext,
      penaltySelection: "IMPAR",
    });
  };

  return (
    <div className="container">
      <div className="tableScoreboard">
        <span>Scoreboard</span>
        <span>Jugador 1: {gameContext.scorePlayer1}</span>
        <span>Jugador 2: {gameContext.scorePlayer2}</span>
      </div>
      <div className="tableAction">
        <span>Turno: Jug. {gameContext.nextPlayer}</span>
        <span>
          {gameContext.isPlaying ? "Playing" : ` ${gameContext.action}`}
        </span>
      </div>
      {gameContext.penaltyMode && (
        <div className="tablePenaltySelection">
          <span>Penalty! Elige:</span>
          <div className="buttonSelection">
            <button
              className="buttonBase rainbow"
              onClick={selectPar}
              ref={refParButton}
            >
              PAR
            </button>
            <button
              className="buttonBase"
              onClick={selectImpar}
              ref={refImparButton}
            >
              IMPAR
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
