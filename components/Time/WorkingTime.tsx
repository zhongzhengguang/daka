import React, { useState, useEffect } from 'react';

const WorkingTime = () => {
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
    return `您已工作 ${h.toString().padStart(2, '0')} 小時 ${m.toString().padStart(2, '0')} 分鐘${s
      .toString()
      .padStart(2, '0')} 秒`;
  };

  const percentage = (elapsedSeconds / 28800) * 100;

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="textGray flex">{formatTime(elapsedSeconds)}</div>
      <div className="w-80 h-3 bg-gray-200 rounded-full flex items-center p-2">
        <div
          className="h-2 bg-[#48A7EE] rounded-full"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={elapsedSeconds}
          aria-valuemin="0"
          aria-valuemax="28800"
        ></div>
      </div>

      <button className={isRunning ? `checkout` : `checkin`} onClick={handleStartStop}>
        {isRunning ? '下班打卡🌜' : '上班打卡🌞'}
      </button>
    </div>
  );
};

export default WorkingTime;
