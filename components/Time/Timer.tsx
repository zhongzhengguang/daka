import React, { useState } from 'react';
import moment from 'moment';

function Timer() {
  const currentTime = moment().valueOf();
  const [checkInTime, setCheckInTime] = useState(0);
  const handlecheckIn = () => {
    setCheckInTime(currentTime);
  };

  return <div onClick={handlecheckIn} className="mt-10"></div>;
}

export default Timer;
