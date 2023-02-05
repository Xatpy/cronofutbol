import { Clock } from "./Clock";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HowToPlay } from "./HowToPlay";
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
          <HowToPlay />
          <MainScoreboard />
          <PenaltySelection />
          <Clock />
          <Footer />
        </div>
      </GameContextProvider>
    </>
  );
};
