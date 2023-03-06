import React, { useState, useEffect } from 'react';

const WorkingTime = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    const elapsedSeconds =
      isRunning && seconds < 28800
        ? setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
          }, 1000)
        : null;

    return (): void => clearInterval(elapsedSeconds);
  }, [isRunning, seconds]);

  const handleStartAndStop = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setSeconds(0);
    }
  };

  const formatTime = (seconds: number) => {
    const hour = Math.floor(seconds / 3600);
    const minute = Math.floor((seconds % 3600) / 60);
    const second = seconds % 60;
    return `您已工作 ${hour.toString().padStart(2, '0')} 小時 ${minute.toString().padStart(2, '0')} 分鐘`;
  };
  // 如果想測試吃入秒數的話
  //   ${second.toString().padStart(2, '0')} 秒
  const percentage: number = (seconds / 28800) * 100;

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="textGray flex">{formatTime(seconds)}</div>
      <div className="w-80 h-3 bg-gray-200 rounded-full flex items-center p-2">
        <div
          className="h-2 bg-[#48A7EE] rounded-full"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={seconds}
          aria-valuemin="0"
          aria-valuemax="28800"
        ></div>
      </div>

      <button className={isRunning ? `checkout` : `checkin`} onClick={handleStartAndStop}>
        {isRunning ? '下班打卡🌜' : '上班打卡🌞'}
      </button>
    </div>
  );
};

export default WorkingTime;
