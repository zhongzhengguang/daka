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
    <div className="flex flex-col justify-center w-screen h-screen items-center absolute bg-black/[0.65]">
      <div className="bg-[#F3F6F8] rounded-lg h-[40vh] w-[368px] relative z-50 ">
        {checkinSuccess ? (
          <div className="flex flex-col justify-center h-full  items-center">
            <h1 className=" textDarkBlue text-xl font-bold">您已成功打卡上班！</h1>
            <p className=" textDarkBlue">今天又是努力賺錢錢的一天💰</p>
          </div>
        ) : (
          <div className="flex flex-col justify-center h-full  items-center">
            <h1 className="textDarkBlue text-xl">你今天在哪裡上班？</h1>
            <button onClick={handleChoose} className="bg-white rounded-lg flex justify-between w-[80%] p-3 mt-10">
              <div>
                <span className="text-[#868A93]">狀態</span>
                <a className="text-[#D15050]">*</a>
              </div>
              <div className="textDarkBlue">{workPlace}</div>
            </button>
            {dropDownList ? (
              <div className="bg-white rounded-lg flex flex-col justify-between items-center space-y-2 w-[80%] py-3 px-2 mt-2 ">
                <button onClick={Office}>
                  <div className="textDarkBlue">Office</div>
                </button>
                <div className="border border-[#d6d8dd] w-[80%] h-[1px]" />
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
