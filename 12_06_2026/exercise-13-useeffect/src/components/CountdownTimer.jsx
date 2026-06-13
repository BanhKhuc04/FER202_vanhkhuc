import { useState, useEffect } from "react";

export default function CountdownTimer({ initialValue }) {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);

  useEffect(() => {
    if (timeRemaining <= 0) return;
    const timerId = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeRemaining]);

  return (
    <div>
      {timeRemaining > 0 ? (
        <p>Time Remaining: <strong>{timeRemaining}</strong></p>
      ) : (
        <p style={{ color: "red" }}>⏰ Time is up!</p>
      )}
      <button onClick={() => setTimeRemaining(initialValue)}>Restart</button>
    </div>
  );
}
