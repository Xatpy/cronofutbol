import { Tooltip } from "react-tippy";

import "./HowToPlay.css";

export const HowToPlay = () => {
  const divHowToPlay = (
    <div className="divTooltipInstructions">
      <h3>Instrucciones de juego</h3>
      <div className="instructions">
        <p>
          Pulsa en el reloj para poner en marcha el crono y pulsa de nuevo para
          pararlo. Y dependiendo de los milisegundos donde se pare:
        </p>
        <ul className="list">
          <li>
            <span className="listTitle">Gol</span> - 00 - El jugador anota un
            gol
          </li>
          <li>
            <span className="listTitle">Falta</span> - Decenas (10, 20, 30...) -
            El jugador repite turno
          </li>
          <li>
            <span className="listTitle">Penalti</span> - (01, 99) - El jugador
            elige PAR o IMPAR y tira de nuevo. Si acierta al parar el crono, es
            gol.
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="howToPlayDiv">
      <Tooltip title="Titulos" position="bottom" html={divHowToPlay} arrow>
        <p>
          đ Para el crono en "<span className="zeroMs">00</span>" ms para
          marcar gol âšī¸
        </p>
      </Tooltip>
    </div>
  );
};
