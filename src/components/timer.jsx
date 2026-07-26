import { useEffect, useState } from "react";

function Timer({ seconds = 120 }) {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    if (time <= 0) return;

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
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