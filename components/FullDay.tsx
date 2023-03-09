import { TimeContext } from 'hooks/useTime';
import React, { useContext, useState } from 'react';

function FullDay() {
  const { currentTime } = useContext(TimeContext);

  return (
    <div className="rounded-lg bg-white  w-[400px]">
      <div className="py-3 px-5 w-full flex flex-col space-y-5">
        <button className=" flex justify-between">
          <div className="textDarkBlue text-lg font-bold">
            <span>{currentTime.format('YYYY')}-</span>
            <span>{currentTime.format('MM')}-</span>
            <span>{currentTime.format('DD')}-</span>
            <span>({currentTime.format('dd')})</span>
          </div>
        </button>
        <button className="bg-white rounded-lg flex justify-between ">
          <div className="textDarkBlue text-lg font-bold">
            <span>{currentTime.format('YYYY')}-</span>
            <span>{currentTime.format('MM')}-</span>
            <span>{currentTime.format('DD')}-</span>
            <span>({currentTime.format('dd')})</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default FullDay;
