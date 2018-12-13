import React, { useState, useEffect } from 'react';

export default function Countdown(props) {
  const [time, setTime] = useState({});
  const [seconds, setSeconds] = useState(240);
  let timer = 0;

  const secondsToTime = secs => {
    let days = Math.floor(secs / 86400);

    let divisor_for_hours = secs % (60 * 60 * 24);
    let hours = Math.floor(divisor_for_hours / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let secondss = Math.ceil(divisor_for_seconds);

    let timeUnits = {
      days,
      hours,
      minutes,
      secondss
    };
    return timeUnits;
  };

  useEffect(() => {
    let timeLeft = secondsToTime(seconds);
    setSeconds(timeLeft);
  });

  const startTimer = () => {
    if (timer === 0 && seconds > 0) {
      timer = setInterval(countDown, 1000);
    }
  };

  const countDown = () => {
    let seconds = seconds - 1;
    setTime(secondsToTime(seconds));
    setSeconds(seconds);

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(timer);
    }
  };

  return (
    <div>
      <button onClick={startTimer}>Start</button>
      {time.d}days {time.h}:{time.m}:{time.s}
    </div>
  );
}
