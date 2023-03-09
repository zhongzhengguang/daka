import React, { useState } from 'react';
import FullDay from './FullDay';
import HalfDay from './HalfDay';

function FullDayOrHalfDay() {
  const [fullday, setFullday] = useState(false);

  function handleToggle() {
    setFullday(!fullday);
  }
  return (
    <div className="relative flex flex-col items-center">
      <div className=" flex  justify-between items-center w-[400px] p-4 py-10">
        {fullday ? <h1>整天</h1> : <h1>半天</h1>}

        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="toggle"
              name="toggle"
              checked={fullday}
              onChange={handleToggle}
              className="sr-only"
            />
            <div className={`h-6 w-12 ${fullday ? 'bg-[#48A7EE]' : 'bg-[#868A93]'} rounded-full shadow-inner`}></div>
            <div
              className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full transition-transform transform ${
                fullday ? 'translate-x-full' : 'translate-x-0'
              }`}
            ></div>
          </div>
        </label>
      </div>
      {fullday ? <FullDay /> : <HalfDay />}
    </div>
  );
}

export default FullDayOrHalfDay;
