import React, { useContext, useState } from "react";

const GameContext = React.createContext();

const initialState = {
  nextPlayer: "1",
  scorePlayer1: 0,
  scorePlayer2: 0,
  action: "",
  isPlaying: false,
  penaltiMode: false,
  penaltiSelection: "",
};

export const useGameContext = () => useContext(GameContext);

export const GameContextProvider = ({ children }) => {
  const gameContext = useState(initialState);

  return (
    <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>
  );
};
