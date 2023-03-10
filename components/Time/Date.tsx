import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Timer from './Timer';
function Date() {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <div className="flex flex-col items-center text-center mt-[10vh]">
      <div className="bottom-0 flex flex-col justify-between ">
        <div className="textDarkBlue text-xl">
          <span>{currentTime.format('YYYY')} 年</span>
          <span>{currentTime.format('M')} 月</span>
          <span>{currentTime.format('D')} 日</span>
          <span> 星期 {currentTime.format('d')}</span>
        </div>
        <div className="flex textDarkBlue ">
          <span className="text-9xl font-semibold">{currentTime.format('HH:mm')}</span>
          <span className="flex flex-col justify-end mb-2 font-semibold">{currentTime.format('A')}</span>
        </div>
        <Timer />
      </div>
    </div>
  );
}

export default Date;
