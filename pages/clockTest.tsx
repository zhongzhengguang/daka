import React, { useState, useEffect } from 'react';

const TimerWithProgressBar = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    const intervalID =
      isRunning && elapsedSeconds < 28800
        ? setInterval(() => {
            setElapsedSeconds((prevSeconds) => prevSeconds + 1);
          }, 1000)
        : null;

    return (): void => clearInterval(intervalID);
  }, [isRunning, elapsedSeconds]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setElapsedSeconds(0);
    }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const percentage = (elapsedSeconds / 60) * 100;

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-80 h-10 bg-gray-200 rounded-full flex items-center p-2">
        <div
          className="h-5 bg-[#48A7EE] rounded-full"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={elapsedSeconds}
          aria-valuemin="0"
          aria-valuemax="28800"
        ></div>
      </div>
      <div className="text-4xl">{formatTime(elapsedSeconds)}</div>
      <button
        className="px-4 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-300"
        onClick={handleStartStop}
      >
        {isRunning ? '停止' : '启动'}
      </button>
    </div>
  );
};

export default TimerWithProgressBar;
