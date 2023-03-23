import React, { useState, useContext, useEffect } from 'react';
import { TimeContext } from 'hooks/useTime';

function WhereAreYouWorkCard() {
  const [checkinSuccess, setCheckinSuccess] = useState(false);
  const {
    setCard,
    card,
    seconds,
    setSeconds,
    isRunning,
    setIsRunning,
    dropDownList,
    workPlace,
    handleChoose,
    Office,
    Remote,
  } = useContext(TimeContext);

  const handleStart = () => {
    setIsRunning(!isRunning);
    setCheckinSuccess(!checkinSuccess);
    if (!isRunning) {
      setSeconds(0);
      console.log('!isRunning');
    } else {
      console.log(seconds);
    }

    setTimeout(() => {
      setCard(!card);
    }, 800);
  };

  return (
    <div className="absolute flex h-screen w-screen flex-col items-center justify-center bg-black/[0.65]">
      <div className="relative z-50 h-[40vh] w-[368px] rounded-lg bg-[#F3F6F8] ">
        {checkinSuccess ? (
          <div className="flex h-full flex-col items-center  justify-center">
            <h1 className=" textDarkBlue text-xl font-bold">您已成功打卡上班！</h1>
            <p className=" textDarkBlue">今天又是努力賺錢錢的一天💰</p>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center  justify-center">
            <h1 className="textDarkBlue text-xl">你今天在哪裡上班？</h1>
            <button onClick={handleChoose} className="mt-10 flex w-[80%] justify-between rounded-lg bg-white p-3">
              <div>
                <span className="text-[#868A93]">狀態</span>
                <a className="text-[#D15050]">*</a>
              </div>
              <div className="textDarkBlue">{workPlace}</div>
            </button>
            {dropDownList ? (
              <div className="mt-2 flex w-[80%] flex-col items-center justify-between space-y-2 rounded-lg bg-white py-3 px-2 ">
                <button onClick={Office}>
                  <div className="textDarkBlue">Office</div>
                </button>
                <div className="h-[1px] w-[80%] border border-[#d6d8dd]" />
                <button onClick={Remote}>
                  <div className="textDarkBlue">Remote</div>
                </button>
              </div>
            ) : (
              <button onClick={handleStart} className="checkin mt-10 px-10 py-2">
                確認
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default WhereAreYouWorkCard;
