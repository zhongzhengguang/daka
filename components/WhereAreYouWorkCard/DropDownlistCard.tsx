import React from 'react';

function DropDownlistCard() {
  return (
    <div>
      <button className="bg-white rounded-lg flex justify-between w-[80%] py-3 px-2">
        <div>
          <span className="text-[#868A93]">狀態</span>
          <a className="text-[#D15050]">*</a>
        </div>
        <div className="textDarkBlue">Office</div>
      </button>
    </div>
  );
}

export default DropDownlistCard;
