import "./MainScoreboard.css";

import { useGameContext } from "../hooks/useGameContext";

export const MainScoreboard = () => {
  const [gameContext] = useGameContext();

  return (
    <div className="container">
      <div className="tableScoreboard">
        <table>
          <tr>
            <td className="scoreboardPlayer1">Jugador 1</td>
            <td className="versusCell"> vs </td>
            <td className="scoreboardPlayer2">Jugador 2</td>
          </tr>
          <tr>
            <td className="scoreboardPlayer1 scoreboardNumber">
              {gameContext.scorePlayer1}
            </td>
            <td>-</td>
            <td className="scoreboardPlayer2 scoreboardNumber">
              {gameContext.scorePlayer2}
            </td>
          </tr>
        </table>
      </div>
      <div
        className={`tableAction ${
          gameContext.nextPlayer === "1" ? "player1Color" : "player2Color"
        }`}
      >
        <span>Turno: Jug. {gameContext.nextPlayer}</span>
        <span>
          {gameContext.isPlaying ? "Playing" : ` ${gameContext.action}`}
        </span>
      </div>
    </div>
  );
};
