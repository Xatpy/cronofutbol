import { Tooltip } from "react-tippy";

import "./HowToPlay.css";

export const HowToPlay = () => {
  const divHowToPlay = (
    <div className="divTooltip">
      <h4>¿Cómo se juega?</h4>
      <p>Pulsa en el reloj para poner en marcha el crono</p>
    </div>
  );
  return (
    <div className="howToPlayDiv">
      <Tooltip
        title="Titulos"
        position="bottom"
        //   trigger="click"
        html={divHowToPlay}
        arrow
      >
        <p>📜 Para el crono en "00" para marcar gol ℹ️</p>
      </Tooltip>
    </div>
  );
};
