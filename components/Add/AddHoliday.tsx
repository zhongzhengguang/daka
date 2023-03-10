import React, { useState } from 'react';

function AddHoliday() {
  const [addHolidayDropDownList, setAddHolidayDropDownList] = useState(false);
  const [addHoliday, setAddHoliday] = useState('新增假別');
  const EachHolidays = [
    {
      id: 1,
      EachLeave: '特休',
      underline: true,
    },
    {
      id: 2,
      EachLeave: '病假',
      underline: true,
    },
    {
      id: 3,
      EachLeave: '陪產假',
      underline: true,
    },
    {
      id: 4,
      EachLeave: '事假',
      underline: true,
    },
    {
      id: 5,
      EachLeave: '事假',
      underline: false,
    },
  ];
  const handleaddHoliday = (eachLeave: string) => {
    setAddHoliday(eachLeave);
    setAddHolidayDropDownList(false);
  };
  return (
    <div className="relative flex flex-col items-center mt-20">
      <h1>我要請假</h1>
      <button
        onClick={() => setAddHolidayDropDownList(!addHolidayDropDownList)}
        className="bg-white rounded-lg flex justify-between w-[400px] p-3 mt-10 mx-2"
      >
        <div>
          <span className="text-[#868A93]">狀態</span>
          <a className="text-[#D15050]">*</a>
        </div>
        <div className="textDarkBlue">{addHoliday}</div>
      </button>
      {addHolidayDropDownList && (
        <div className="bg-white rounded-lg flex flex-col justify-between space-y-2 w-[400px] py-3 px-2 absolute top-[120px] z-10">
          {EachHolidays.map((addHoliday) => (
            <div key={addHoliday.id}>
              <button className=" flex justify-center items-center w-full">
                <div onClick={() => handleaddHoliday(addHoliday.EachLeave)} className="textDarkBlue py-5">
                  {addHoliday.EachLeave}
                </div>
              </button>
              {addHoliday.underline && <div className="border border-[#edeef0] w-full h-[1px]" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AddHoliday;
