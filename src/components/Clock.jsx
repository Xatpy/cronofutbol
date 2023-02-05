import { useRef, useState } from "react";

import Confetti from "react-dom-confetti";

import useSound from "use-sound";

import { useGameContext } from "../hooks/useGameContext";
import useTimer from "../hooks/useTimer";
import { confettiConfig } from "../utils/config";
import { msToTime, processTime, processpenalti } from "../utils/time";

import "./Clock.css";

import beepSound from "../assets/beep.ogg";

export const Clock = () => {
  const { elapsedTime, isRunning, handleStart, handlePause } = useTimer(0);

  const [playBeepSound] = useSound(beepSound, { autoplay: true });

  const [gameContext, updateGameContext] = useGameContext();

  const refButtonLeftTop = useRef(null);
  const refInteractiveButton = useRef(null);

  const [isExploding, setIsExploding] = useState(false);

  const interactStopwatch = () => {
    playBeepSound();

    if (isExploding) {
      setIsExploding(false);
    }

    refInteractiveButton.current.classList.add("animationButton");

    const goalText = "¡Gol! ⚽️";

    if (isRunning) {
      handlePause();

      let nextPlayer = gameContext.nextPlayer;
      let scorePlayer1 = gameContext.scorePlayer1;
      let scorePlayer2 = gameContext.scorePlayer2;
      let penaltyMode = false;

      let action = "";

      if (gameContext.penaltyMode) {
        action = "Next";
        const penaltiResult = processpenalti(elapsedTime);
        if (penaltiResult === "PAR") {
          if (
            gameContext.penaltiSelection === "PAR" ||
            gameContext.penaltiSelection === ""
          ) {
            action = goalText;
            setIsExploding(true);
            if (nextPlayer === "1") {
              scorePlayer1 = gameContext.scorePlayer1 + 1;
            } else {
              scorePlayer2 = gameContext.scorePlayer2 + 1;
            }
            nextPlayer = gameContext.nextPlayer;
          } else {
            nextPlayer = nextPlayer === "1" ? "2" : "1";
          }
        } else {
          if (gameContext.penaltiSelection === "IMPAR") {
            action = goalText;
            setIsExploding(true);
            if (nextPlayer === "1") {
              scorePlayer1 = gameContext.scorePlayer1 + 1;
            } else {
              scorePlayer2 = gameContext.scorePlayer2 + 1;
            }
            nextPlayer = gameContext.nextPlayer;
          } else {
            nextPlayer = nextPlayer === "1" ? "2" : "1";
          }
        }
      } else {
        action = processTime(elapsedTime);
        if (action === "Gol") {
          action = goalText;
          setIsExploding(true);
          nextPlayer = gameContext.nextPlayer;
          if (nextPlayer === "1") {
            scorePlayer1 = gameContext.scorePlayer1 + 1;
          } else {
            scorePlayer2 = gameContext.scorePlayer2 + 1;
          }
          // } else if (action === "FALTA") {
        } else if (action === "Penalti") {
          penaltyMode = true;
        } else {
          nextPlayer = nextPlayer === "1" ? "2" : "1";
        }
      }

      updateGameContext({
        ...gameContext,
        nextPlayer: nextPlayer,
        scorePlayer1: scorePlayer1,
        scorePlayer2: scorePlayer2,
        action: action,
        isPlaying: false,
        penaltyMode: penaltyMode,
      });
    } else {
      handleStart();

      updateGameContext({
        ...gameContext,
        isPlaying: true,
      });
    }
  };

  const onAnimationEnd = () => {
    refInteractiveButton.current.classList.remove("animationButton");
  };

  if (elapsedTime) {
    const parsedTime = msToTime(elapsedTime);
    document.querySelector(".seconds").innerHTML = parsedTime.milliseconds
      .toString()
      .padStart(2, "0");
    document.querySelector(".minutes").innerHTML = parsedTime.seconds;
    document.querySelector(".hours").innerHTML = parsedTime.minutes;
  }

  return (
    <>
      <div className="clockShape" onClick={interactStopwatch}>
        <div className="container">
          <div className="casio-f91w">
            <div className="core-watch-container">
              <div className="buttons-container">
                <div className="left top button-notch"></div>
                <div
                  className="button"
                  ref={refButtonLeftTop}
                  id="idButtonLeftTop"
                ></div>
                <div className="space"></div>
                <div className="left bottom button-notch"></div>
                <div className="button"></div>
              </div>
              <div className="core-watch">
                <div className="crystal-screen">
                  <div className="color-border">
                    <div className="lcd-screen">
                      <div className="top">
                        <div className="brand text-white">CASIO</div>
                      </div>
                      <div className="center">
                        <div className="inner-top">
                          <div className="action text-white font-small">
                            <span className="left arrow">◀</span> LIGHT
                          </div>
                          <div className="chronograph text-yellow font-small">
                            ALARM CHRONOGRAPH
                          </div>
                        </div>
                        <div className="inner-center">
                          <div className="lcd-top">
                            <span className="timemode">‍</span>
                            <span className="weekday mini"> ST</span>
                            <span className="day mini">‍</span>
                          </div>
                          <div className="lcd-bottom">
                            <span className="time">
                              <span className="hours">00</span>
                              <span className="sep">:</span>
                              <span className="minutes">00</span>
                            </span>
                            <span className="seconds mini">00</span>
                          </div>
                        </div>
                        <div className="inner-bottom">
                          <div className="mode text-white font-small">
                            <span className="left arrow">◀</span> MODE
                          </div>
                          <div className="alarm text-white font-small">
                            ALARM ON-OFF/24HR{" "}
                            <span className="right arrow">▶</span>
                          </div>
                        </div>
                      </div>
                      <div className="bottom">
                        <div className="water text-white font-medium">
                          WATER
                        </div>
                        <div className="wr-box text-red">
                          <span>
                            W<span className="r">R</span>
                          </span>
                        </div>
                        <div className="resist text-white font-medium">
                          RESIST
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttons-container">
                <div className="right top button-notch"></div>
                <div className="space"></div>
                <div className="right bottom button-notch"></div>
                <div
                  className="button"
                  id="interactiveButton"
                  ref={refInteractiveButton}
                  onAnimationEnd={onAnimationEnd}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Confetti active={isExploding} config={confettiConfig} />
    </>
  );
};

export default Clock;
