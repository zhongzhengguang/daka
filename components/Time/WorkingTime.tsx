import TimeProvider, { TimeContext } from 'hooks/useTime';
import React, { useState, useEffect, useContext } from 'react';

const WorkingTime = () => {
  const { seconds, setSeconds, isRunning, setIsRunning, card, setCard, workPlace } = useContext(TimeContext);
  // console.log(isRunning);

  const handleOpenCard = () => {
    setCard(!card);
  };

  const handleStop = async () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setSeconds(0);
      console.log('!isRunning');
    } else {
      // send data to backend
      console.log(seconds);
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
  const TimePercentage: number = (seconds / 28800) * 100;

  return (
    <div className="mt-10 flex flex-col items-center space-y-4">
      <div className="textGray flex">{formatTime(seconds)}</div>
      <div className="flex h-3 w-80 items-center rounded-full bg-gray-200 p-2">
        <div
          className="h-2 rounded-full bg-[#48A7EE]"
          style={{ width: `${TimePercentage}%` }}
          role="progressbar"
          aria-valuenow={seconds}
          aria-valuemin={0}
          aria-valuemax={28800}
        ></div>
      </div>
      {isRunning ? (
        <button
          onClick={handleStop}
          className={
            isRunning
              ? `checkout px-20 py-5
 `
              : `checkin px-20 py-5`
          }
        >
          下班打卡🌜
        </button>
      ) : (
        <button onClick={handleOpenCard} className="checkin px-20 py-5">
          上班打卡🌞
        </button>
      )}
    </div>
  );
};

export default WorkingTime;
