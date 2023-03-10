import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { TimeContext } from 'hooks/useTime';
function Date() {
  const { currentTime } = useContext(TimeContext);

  return (
    <div className="flex flex-col items-center text-center ">
      <div className="bottom-0 flex flex-col justify-between ">
        <div className="textDarkBlue text-xl">
          <span>{currentTime.format('YYYY')} 年</span>
          <span>{currentTime.format('M')} 月</span>
          <span>{currentTime.format('D')} 日</span>
          <span> 星期 {currentTime.format('dd')}</span>
        </div>
        <div className="flex textDarkBlue ">
          <span className="text-9xl font-semibold">{currentTime.format('HH:mm')}</span>
          <span className="flex flex-col justify-end mb-2 font-semibold">
            {currentTime.format('HH:mm') >= '12:00' ? 'PM' : 'AM'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Date;
