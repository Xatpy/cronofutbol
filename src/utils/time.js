export function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 10),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
  };
}

export function processTime(duration) {
  const time = msToTime(duration);
  const ms = time.milliseconds;
  if (ms === 0) {
    return "Gol";
  } else if ([10, 20, 30, 40, 50, 60, 70, 80, 90].includes(ms)) {
    return "Falta";
  } else if ([99, 1].includes(ms)) {
    return "Penalty";
  } else if (ms < 50) {
    return "Penalty";
  } else {
    return "Next";
  }
}

export function processPenalty(duration) {
  const time = msToTime(duration);
  return time.milliseconds % 2 === 0 ? "PAR" : "IMPAR";
}
