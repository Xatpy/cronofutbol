import React from "react";

import { ShareType } from "./ShareComponent";
import { ShareComponent } from "./ShareComponent";

import styles from "./SharePanel.module.css";

export const SharePanel: React.FC = () => {
  return (
    <div className={styles.share}>
      <span>
        <em>Compartir:</em>
      </span>
      <ShareComponent type={ShareType.Whatsapp} title="Cronofutbol" />
      <ShareComponent type={ShareType.Twitter} title="Cronofutbol" />
      {/* <ShareComponent type={ShareType.Facebook} /> */}
      <ShareComponent type={ShareType.Telegram} title="Cronofutbol" />
    </div>
  );
};
