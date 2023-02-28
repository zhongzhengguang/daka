import React from 'react';
import Image from 'next/image';
import user from '../public/user.png';
function Track() {
  return (
    <div className=" flex flex-col justify-center items-center mt-10 ">
      <ul className="track p-5">
        <li className="trackLi">
          <Image src={user} alt="/" />
          <div className=" flex flex-col">
            <h1 className="">user1</h1>
            <div className=" flex space-x-3 textGray">
              <h2>office</h2>
              <h2>Remote</h2>
            </div>
          </div>
          <button className=" bg-[#DEECDC] rounded-lg py-2 px-5">Online</button>
        </li>
      </ul>
      資料？
    </div>
  );
}

export default Track;
