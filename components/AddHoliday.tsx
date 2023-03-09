import React, { useState } from 'react';

function AddHoliday() {
  const [addHolidayDropDownList, setAddHolidayDropDownList] = useState(false);
  const [addHoliday, setAddHoliday] = useState('新增假別');
  const EachHolidays = [
    {
      id: 1,
      EachLeave: '特休',
    },
    {
      id: 2,
      EachLeave: '病假',
    },
    {
      id: 3,
      EachLeave: '陪產假',
      bg: 'bg-[#F3F6F8]',
    },
    {
      id: 4,
      EachLeave: '事假',
    },
    {
      id: 5,
      EachLeave: '事假',
    },
  ];
  const handleaddHoliday = (eachLeave: string) => {
    setAddHoliday(eachLeave);
    setAddHolidayDropDownList(false);
  };
  return (
    <div className="relative flex flex-col items-center">
      <h1>我要請假</h1>
      <button
        onClick={() => setAddHolidayDropDownList(!addHolidayDropDownList)}
        className="bg-white rounded-lg flex justify-between w-[400px] p-3 mt-10"
      >
        <div>
          <span className="text-[#868A93]">狀態</span>
          <a className="text-[#D15050]">*</a>
        </div>
        <div className="textDarkBlue">{addHoliday}</div>
      </button>
      {addHolidayDropDownList && (
        <div className="bg-white rounded-lg flex flex-col justify-between space-y-2 w-[80%] py-3 px-2 absolute top-[130px] z-10">
          {EachHolidays.map((addHoliday) => (
            <div key={addHoliday.id}>
              <button className=" flex justify-center items-center w-full">
                <div onClick={() => handleaddHoliday(addHoliday.EachLeave)} className="textDarkBlue py-5">
                  {addHoliday.EachLeave}
                </div>
              </button>
              <div className="border border-[#d6d8dd] w-full h-[1px]" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AddHoliday;
