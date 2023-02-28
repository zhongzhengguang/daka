import React, { useState } from 'react';
import userphoto from '../../public/checkpage/userphoto.png';
import Image from 'next/image';
import VectorDown from '../../public/checkpage/VectorDown.png';
import VectorUp from '../../public/checkpage/VectorUp.png';
import DropDownlist from '@/components/Navbar/DropDownlist';
function Navbar() {
  const [dropdownList, setDropDownList] = useState(false);
  const handleDropDown = () => {
    setDropDownList(!dropdownList);
  };
  return (
    <div className=" mt-10 mx-5">
      <div className="flex justify-between items-center">
        <p className="text">忘記打卡？</p>
        <div onClick={handleDropDown} className=" flex items-center space-x-2 cursor-pointer">
          <Image src={userphoto} alt="" />
          {dropdownList ? (
            <div className="flex flex-col">
              <Image src={VectorUp} alt="" />
            </div>
          ) : (
            <Image src={VectorDown} alt="" />
          )}
        </div>
      </div>
      {dropdownList ? <DropDownlist /> : null}
    </div>
  );
}

export default Navbar;
