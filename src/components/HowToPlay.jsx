import React from "react";

import { Tooltip } from "react-tippy";

export const HowToPlay = () => {
  const divHowToPlay = (
    <div style={{ backgroundColor: "yellow" }}>
      <strong>Titulo</strong>
      <p>Parrafos</p>
    </div>
  );
  return (
    <Tooltip
      title="Titulos"
      position="bottom"
      //   trigger="click"
      html={divHowToPlay}
      arrow
    >
      <p>📜 Instrucciones</p>
    </Tooltip>
  );
};
