import { TimeContext } from 'hooks/useTime';
import React, { useContext, useState } from 'react';
import Calendar from '../Calendar';

function FullDay() {
  const { currentTime } = useContext(TimeContext);
  const [calendar, setCalendar] = useState(false);

  return (
    <div className="rounded-lg bg-white  w-[400px]">
      <div className="py-3 px-5 ">
        <button onClick={() => setCalendar(!calendar)} className="flex flex-col space-y-5 justify-between">
          <div className="textDarkBlue text-lg font-bold">
            <span>{currentTime.format('YYYY')}-</span>
            <span>{currentTime.format('MM')}-</span>
            <span>{currentTime.format('DD')}-</span>
            <span>({currentTime.format('dd')})</span>
          </div>
          <div className="textDarkBlue text-lg font-bold">
            <span>{currentTime.format('YYYY')}-</span>
            <span>{currentTime.format('MM')}-</span>
            <span>{currentTime.format('DD')}-</span>
            <span>({currentTime.format('dd')})</span>
          </div>
        </button>
        {calendar && <Calendar />}
      </div>
    </div>
  );
}

export default FullDay;
