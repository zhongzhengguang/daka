import TimeProvider, { TimeContext } from 'hooks/useTime';
import React, { useState, useEffect, useContext } from 'react';

const WorkingTime = () => {
  const {
    currentTime,
    setCurrentTime,
    seconds,
    setSeconds,
    isRunning,
    setIsRunning,
    card,
    setCard,
    dropDownList,
    setDropDownList,
    workPlace,
    setWorPlace,
    handleChoose,
    Office,
    Remote,
  } = useContext(TimeContext);

  const handleOpenCard = () => {
    setCard(!card);
  };

  const handleStop = () => {
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
    return `您已工作 ${hour.toString().padStart(2, '0')} 小時 ${minute.toString().padStart(2, '0')} 分鐘  ${second
      .toString()
      .padStart(2, '0')} 秒`;
  };
  // 如果想測試吃入秒數的話
  //   ${second.toString().padStart(2, '0')} 秒
  const TimePercentage: number = (seconds / 60) * 100;

  return (
    <div className="flex flex-col items-center space-y-4 mt-10">
      <div className="textGray flex">{formatTime(seconds)}</div>
      <div className="w-80 h-3 bg-gray-200 rounded-full flex items-center p-2">
        <div
          className="h-2 bg-[#48A7EE] rounded-full"
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
