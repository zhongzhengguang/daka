import React, { useState } from 'react';
import moment from 'moment';

function Timer() {
  const currentTime = moment().valueOf();
  const [checkInTime, setCheckInTime] = useState(0);
  const handlecheckIn = () => {
    setCheckInTime(currentTime);
  };
  //   const workinrtime = currentTime - checkInTime;

  return (
    <div onClick={handlecheckIn} className="mt-10">
      <div className=" textGray flex">
        <p>您已工作 </p>
        <span>0 小時</span>
        <span>00 分鐘</span>
      </div>
      <div className="textGray">讀取條？？</div>
    </div>
  );
}

export default Timer;
