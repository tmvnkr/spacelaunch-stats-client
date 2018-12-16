import React, { useState, useEffect } from 'react';

export default function Countdown(props) {
  const { launchDateUnix } = props;
  const [time, setTime] = useState({});
  const [secondsToLaunch, setSeconds] = useState(launchDateUnix);

  let timer = 0;

  const secondsToTime = secs => {
    let days = Math.floor(secs / 86400);

    let divisor_for_hours = secs % (60 * 60 * 24);
    let hours = Math.floor(divisor_for_hours / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let timeUnits = {
      d: days,
      h: hours,
      m: minutes,
      s: seconds
    };
    return timeUnits;
  };

  const startTimer = () => {
    if (timer === 0 && secondsToLaunch > 0) {
      timer = setInterval(countDown, 1000);
    }
  };

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {});

  const countDown = () => {
    const countdown = launchDateUnix - Math.floor(Date.now() / 1000);
    setTime(secondsToTime(countdown));
    setSeconds(countdown);
    if (countdown === 0) {
      clearInterval(timer);
    }
  };

  const countdownFormat = () => {
    let days, hours, minutes, seconds, formattedTime;
    if (time.d === 0) {
      days = '';
    } else if (time.d === 1) {
      days = `${time.d} day `;
    } else {
      days = `${time.d} days `;
    }

    if (time.h === 0) {
      hours = '00:';
    } else if (time.h <= 9) {
      hours = `0${time.h}:`;
    } else {
      hours = `${time.h}:`;
    }

    if (time.m === 0) {
      minutes = '00:';
    } else if (time.m <= 9) {
      minutes = `0${time.m}:`;
    } else {
      minutes = `${time.m}:`;
    }

    if (time.s === 0) {
      seconds = '00';
    } else if (time.s <= 9) {
      seconds = `0${time.s}`;
    } else {
      seconds = time.s;
    }

    formattedTime = `${days}${hours}${minutes}${seconds}`;
    return formattedTime;
  };

  return (
    <>
      <h1>{countdownFormat()}</h1>
    </>
  );
}
