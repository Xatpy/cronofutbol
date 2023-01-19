import React from "react";

import { Clock } from "./Clock";
import { MainScoreboard } from "./MainScoreboard";

import "./Main.css";

import { GameContextProvider } from "../hooks/useGameContext";

const initialUser = {
  nextPlayer: "test",
  players: [],
  score: [],
  action: "",
};

export const Main = () => {
  return (
    <GameContextProvider value={initialUser}>
      <div className="mainContainer">
        <MainScoreboard />
        <Clock />
      </div>
    </GameContextProvider>
  );
};
