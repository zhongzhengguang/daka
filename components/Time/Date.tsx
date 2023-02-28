import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Timer from './Timer';
function Date() {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [week, setWeek] = useState('');
  const [localTime, setLocalTime] = useState('');
  const [AMPM, setAMPM] = useState('');
  const year1 = moment().format('YYYY');
  const month1 = moment().format('M');
  const day1 = moment().format('D');
  const week1 = moment().format('d');
  const localTime1 = moment().format('HH:mm:ss');
  const AMPM1 = moment().format('A');

  useEffect(() => {
    setYear(year1);
    setMonth(month1);
    setDay(day1);
    setWeek(week1);
    setLocalTime(localTime1);
    setAMPM(AMPM1);
  }, [localTime1]);

  return (
    <div className="flex flex-col items-center text-center mt-[10vh]">
      <div className="bottom-0 flex flex-col justify-between ">
        <div className="textDarkBlue text-xl">
          <span> {year} 年</span>
          <span> {month} 月</span>
          <span> {day} 日</span>
          <span> 星期 {week}</span>
        </div>
        <div className="flex textDarkBlue ">
          <span className="text-9xl font-semibold">{localTime}</span>
          <span className="flex flex-col justify-end mb-2 font-semibold">{AMPM}</span>
        </div>
        <Timer />
      </div>
    </div>
  );
}

export default Date;
