import { useRef } from "react";

import "./PenaltiSelection.css";

import { useGameContext } from "../hooks/useGameContext";

export const PenaltiSelection = () => {
  const [gameContext, updateGameContext] = useGameContext();

  const refParButton = useRef(null);
  const refImparButton = useRef(null);
  const selectPar = () => {
    refParButton.current.classList.add("rainbow");
    refImparButton.current.classList.remove("rainbow");
    updateGameContext({
      ...gameContext,
      penaltiSelection: "PAR",
    });
  };

  const selectImpar = () => {
    refParButton.current.classList.remove("rainbow");
    refImparButton.current.classList.add("rainbow");
    updateGameContext({
      ...gameContext,
      penaltiSelection: "IMPAR",
    });
  };

  return (
    <div
      className={`tablepenaltiSelection ${
        gameContext.penaltyMode ? "visible" : "visibilityHidden"
      }`}
    >
      <span>¡Penalti! Elige una opción:</span>
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
