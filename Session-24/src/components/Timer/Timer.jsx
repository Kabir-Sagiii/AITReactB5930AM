import { useState, useRef } from "react";

function Timer() {
  let [timer, setTimer] = useState(0);
  let timerId = useRef(null); // timerId = {current:null}

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
  };

  return (
    <div>
      <h2>Timer : {timer} sec</h2>
      <button onClick={startTimer}>Start</button>&nbsp;&nbsp;&nbsp;
      <button disabled onClick={stopTimer}>
        Stop
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        disabled
        onClick={() => {
          setTimer(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Timer;
