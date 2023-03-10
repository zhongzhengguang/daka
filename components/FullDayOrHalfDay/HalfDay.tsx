import { TimeContext } from 'hooks/useTime';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import VectorDown from '../../public/checkpage/VectorDown.png';
import VectorUp from '../../public/checkpage/VectorUp.png';
import 'moment/locale/zh-cn';
function HalfDay() {
  const {
    currentTime,
    timeCard,
    setTimeCard,
    finishTimeCard,
    setFinishTimeCard,
    hourValue,
    setHourValue,
    minuteValue,
    setMinuteValue,
    finishHourValue,
    setFinishHourValue,
    finishMinuteValue,
    setFinishMinuteValue,
  } = useContext(TimeContext);

  const finishHandleHourChoose = (direction: string) => {
    if (direction === 'up') {
      if (finishHourValue < 23) {
        // set limit to 23 for hours
        setFinishHourValue(finishHourValue + 1);
      } else {
        setFinishHourValue(1);
      }
    } else if (direction === 'down') {
      if (finishHourValue > 0) {
        // set limit to 0 for hours
        setFinishHourValue(finishHourValue - 1);
      } else {
        setFinishHourValue(23);
      }
    }
  };
  const handleHourChoose = (direction: string) => {
    if (direction === 'up') {
      if (hourValue < 23) {
        // set limit to 23 for hours
        setHourValue(hourValue + 1);
      } else {
        setHourValue(1);
      }
    } else if (direction === 'down') {
      if (hourValue > 0) {
        // set limit to 0 for hours
        setHourValue(hourValue - 1);
      } else {
        setHourValue(23);
      }
    }
  };
  const finishHandleMinuteChoose = (direction: string) => {
    if (direction === 'up') {
      if (finishMinuteValue < 50) {
        // set limit to 23 for hours
        setFinishMinuteValue(finishMinuteValue + 10);
      } else {
        setFinishMinuteValue(0);
        setFinishHourValue(finishHourValue + 1);
      }
    } else if (direction === 'down') {
      if (finishMinuteValue > 0) {
        // set limit to 0 for hours
        setFinishMinuteValue(finishMinuteValue - 10);
      } else {
        setFinishMinuteValue(50);
        setFinishHourValue(finishHourValue - 1);
      }
    }
  };
  const handleMinuteChoose = (direction: string) => {
    if (direction === 'up') {
      if (minuteValue < 50) {
        // set limit to 23 for hours
        setMinuteValue(minuteValue + 10);
      } else {
        setMinuteValue(0);
        setHourValue(hourValue + 1);
      }
    } else if (direction === 'down') {
      if (minuteValue > 0) {
        // set limit to 0 for hours
        setMinuteValue(minuteValue - 10);
      } else {
        setMinuteValue(50);
        setHourValue(hourValue - 1);
      }
    }
  };

  return (
    <div className="rounded-lg bg-white  w-[400px]">
      <div className="py-3 px-5 w-full flex flex-col space-y-5">
        <button onClick={() => setTimeCard(!timeCard)} className=" flex justify-between">
          <div className="textDarkBlue text-lg font-bold">
            <span>{currentTime.format('YYYY')}-</span>
            <span>{currentTime.format('MM')}-</span>
            <span>{currentTime.format('DD')}-</span>
            <span>({currentTime.format('dd')})</span>
          </div>
          <div className="textDarkBlue underline underline-offset-4">
            {hourValue.toString().padStart(2, '0')}:{minuteValue.toString().padStart(2, '0')}
          </div>
        </button>
        {timeCard && (
          <div className=" flex justify-between items-center px-5">
            <div className=" flex flex-col items-center space-y-5 scroll-container">
              <Image className=" cursor-pointer" onClick={() => handleHourChoose('up')} src={VectorUp} alt="VectorUp" />
              <div>{hourValue.toString().padStart(2, '0')}</div>

              <Image onClick={() => handleHourChoose('down')} src={VectorDown} alt="VectorDown" />
            </div>
            <div className=" textDarkBlue text-2xl">:</div>
            <div className=" flex flex-col items-center space-y-5">
              <Image
                className=" cursor-pointer"
                onClick={() => handleMinuteChoose('up')}
                src={VectorUp}
                alt="VectorUp"
              />
              <div>{minuteValue.toString().padStart(2, '0')}</div>
              <Image
                className=" cursor-pointer"
                src={VectorDown}
                onClick={() => handleMinuteChoose('down')}
                alt="VectorDown"
              />
            </div>
            <div />
            <div className=" flex flex-col items-center space-y-5">
              <Image src={VectorUp} alt="VectorUp" />
              <div> {hourValue >= 12 ? 'PM' : 'AM'}</div>
              <Image src={VectorDown} alt="VectorDown" />
            </div>
          </div>
        )}

        <button
          onClick={() => setFinishTimeCard(!finishTimeCard)}
          className="bg-white rounded-lg flex justify-between "
        >
          <div className="textDarkBlue text-lg font-bold">
            <span>{currentTime.format('YYYY')}-</span>
            <span>{currentTime.format('MM')}-</span>
            <span>{currentTime.format('DD')}-</span>
            <span>({currentTime.format('dd')})</span>
          </div>
          <div className="textDarkBlue underline underline-offset-4">
            {finishHourValue.toString().padStart(2, '0')}:{finishMinuteValue.toString().padStart(2, '0')}
          </div>
        </button>
        {finishTimeCard && (
          <div className=" flex justify-between items-center px-5">
            <div className=" flex flex-col items-center space-y-5 scroll-container">
              <Image
                className=" cursor-pointer"
                onClick={() => finishHandleHourChoose('up')}
                src={VectorUp}
                alt="VectorUp"
              />
              <div>{finishHourValue.toString().padStart(2, '0')}</div>

              <Image onClick={() => finishHandleHourChoose('down')} src={VectorDown} alt="VectorDown" />
            </div>
            <div className=" textDarkBlue text-2xl">:</div>
            <div className=" flex flex-col items-center space-y-5">
              <Image
                className=" cursor-pointer"
                onClick={() => finishHandleMinuteChoose('up')}
                src={VectorUp}
                alt="VectorUp"
              />
              <div>{finishMinuteValue.toString().padStart(2, '0')}</div>
              <Image
                className=" cursor-pointer"
                src={VectorDown}
                onClick={() => finishHandleMinuteChoose('down')}
                alt="VectorDown"
              />
            </div>
            <div />
            <div className=" flex flex-col items-center space-y-5">
              <Image src={VectorUp} alt="VectorUp" />
              <div> {finishHourValue >= 12 ? 'PM' : 'AM'}</div>
              <Image src={VectorDown} alt="VectorDown" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HalfDay;
