"use client";
import React, { useState, useEffect } from "react";

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(3600 * 12); // 1 hour in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days: number = Math.floor(timeLeft / 86400);
  const hours: number = Math.floor((timeLeft % 86400) / 3600);
  const minutes: number = Math.floor((timeLeft % 3600) / 60);
  const seconds: number = timeLeft % 60;

  return (
    <div
      className="countdown-timer bg-customblack flex justify-center items-center"
      style={{ borderRadius: "14px" }}
    >
      <div className="w-[240px] h-[160px] flex flex-col justify-center mx-3 mt-1">
        <h1>Rewards unlocks in</h1>
        <h1 className="text-white/60 text-sm mb-1">
          -------------------------------
        </h1>
        <div
          className="counter w-[240px] h-[100px] py-8 flex flex-row gap-3 justify-center items-center text-white "
          style={{
            backgroundImage:
              'url("https://www.intract.io/assets/dotBg-149528a0.png")',
            borderRadius: "10px",
            border: "solid #2b2626",
          }}
        >
          <div className=" flex flex-col text-xl items-center font-bold">
            {days} <h1>Days</h1>{" "}
          </div>
          <div className=" flex flex-col text-xl items-center font-bold">
            {hours} <h1>Hrs</h1>{" "}
          </div>
          <div className=" flex flex-col text-xl items-center font-bold">
            {minutes} <h1>min</h1>{" "}
          </div>
          <div className=" flex flex-col text-xl items-center font-bold">
            {seconds} <h1>secs</h1>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
