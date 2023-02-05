import { useRef } from "react";

import "./PenaltySelection.css";

import { useGameContext } from "../hooks/useGameContext";

export const PenaltySelection = () => {
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
    <div
      className={`tablePenaltySelection ${
        gameContext.penaltyMode ? "visible" : "visibilityHidden"
      }`}
    >
      <span>¡Penalty! Elige una opción:</span>
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
  );
};
