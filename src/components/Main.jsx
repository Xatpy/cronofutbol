import React from "react";

import { Clock } from "./Clock";
import { Header } from "./Header";
import { MainScoreboard } from "./MainScoreboard";
import { PenaltySelection } from "./PenaltySelection";

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
    <>
      <Header />
      <GameContextProvider value={initialUser}>
        <div className="mainContainer">
          <MainScoreboard />
          <Clock />
          <PenaltySelection />
        </div>
      </GameContextProvider>
    </>
  );
};
