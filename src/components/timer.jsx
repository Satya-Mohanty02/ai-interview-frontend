import { useEffect, useState } from "react";

function Timer({ seconds = 90, currentQuestion }) {
  const [time, setTime] = useState(seconds);

  // Reset timer 
  useEffect(() => {
    setTime(seconds);
  }, [currentQuestion, seconds]);

  // Countdown
  useEffect(() => {
    if (time <= 0) return;

    const timer = setTimeout(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const secs = String(time % 60).padStart(2, "0");

  return (
    <div className="timer">
      ⏱ {minutes}:{secs}
    </div>
  );
}

export default Timer;
