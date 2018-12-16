import React, { useState, useEffect } from 'react';

export default function Countdown(props) {
  const { launchDateUnix } = props;
  const [time, setTime] = useState({});
  const [seconds, setSeconds] = useState(launchDateUnix);

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

  const startTimer = () => {
    if (timer === 0 && seconds > 0) {
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

  return (
    <div>
      <div>
        <h1>
          {time.days} days {time.hours}:{time.minutes}:{time.secondss}
        </h1>
      </div>
    </div>
  );
}
