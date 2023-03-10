import dayjs from 'dayjs';

import React, { useContext, useEffect, useState } from 'react';
import { getMonth } from '../util';
import Image from 'next/image';
import left from '../public/left.png';

export default function Calendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [selectedDay, setSelectedDay] = useState(dayjs());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }
  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  function getDayClass(day: any) {
    const today = dayjs().format('DD-MM-YY');
    const currentday = day.format('DD-MM-YY');
    const isCurrentMonth = day.month() === currentMonthIdx;
    const isCurrentYear = day.year() === dayjs().year();
    const isSelectedDay = day.format('DD-MM-YY') === selectedDay.format('DD-MM-YY');
    if (today === currentday) {
      return 'bg-gray-200 rounded-full';
    } else if (isSelectedDay) {
      return 'bg-[#48A7EE]  rounded-full';
    } else if (isCurrentMonth && isCurrentYear) {
      return '';
    } else {
      return 'opacity-30';
    }
  }

  return (
    <div className="mt-9  bg-[#FFFFFF] p-3 rounded-xl">
      <div className=" flex mb-3 items-center justify-between textDarkBlue px-2">
        <div>
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMM YYYY')}
          <button className="ml-2 cursor-pointer">
            <Image className="rotate-180" src={left} alt="right" />
          </button>
        </div>
        <div className="flex space-x-5">
          <button onClick={handlePrevMonth} className=" cursor-pointer">
            <Image src={left} alt="left" />
          </button>
          <button onClick={handleNextMonth} className=" cursor-pointer">
            <Image className="rotate-180" src={left} alt="right" />
          </button>
        </div>
      </div>
      <div className=" grid grid-cols-7 grid-rows-6 ">
        {currentMonth[0].map((day, i) => (
          <span className="text-sm py-1 text-center  text-[#3C3C43] opacity-30" key={i}>
            {day.format('ddd').toUpperCase()}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button key={idx} className={`py-1 w-full ${getDayClass(day)}`} onClick={() => setSelectedDay(day)}>
                <span className={`textDarkBlue ${getDayClass(day)}`}>{day.format('D')}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
