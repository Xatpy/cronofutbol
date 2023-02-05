import { Tooltip } from "react-tippy";

import { SharePanel } from "./Share/SharePanel";

import "./Footer.css";

export const Footer = () => {
  const divFooter = (
    <div className="divTooltipFooter">
      <p>
        <a
          href="https://codepen.io/manz/pen/KKWmWLb"
          target="_blank"
          rel="noopener noreferrer"
        >
          CASIO F-91W with Pure CSS!!
        </a>{" "}
        hecho por{" "}
        <a
          href="https://twitter.com/Manz/status/1396744763915841536?s=20&t=ZgyrpHxRE6UB7jbseJ8NAg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Manz
        </a>
      </p>
    </div>
  );

  return (
    <footer className="footer">
      <SharePanel />
      <Tooltip
        title="Titulos"
        position="bottom"
        trigger="click"
        html={divFooter}
        arrow
      >
        <span>©</span>
      </Tooltip>
    </footer>
  );
};
