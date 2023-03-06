import React from 'react';
import Image from 'next/image';
import personalLeave from '../../public/checkpage/personalLeave.png';
import personalLeaveHistory from '../../public/checkpage/personalLeaveHistory.png';
import onWorkHistory from '../../public/checkpage/onWorkHistory.png';
import personalfile from '../../public/checkpage/personalfile.png';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
function DropDownlist() {
  const router = useRouter();

  return (
    <div
      className="flex justify-end items-center w-full mt-5 
    absolute right-5"
    >
      <div className="w-[268px] border rounded-lg bg-white">
        <ul className="space-y-10 mt-10 mb-10">
          <li className="li">
            <Image src={personalLeave} alt="/" />
            <p className="text">我要請假</p>
          </li>
          <li className="li">
            <Image src={personalLeaveHistory} alt="/" />
            <p className="text">請假紀錄</p>
          </li>
          <li className="li">
            <Image src={onWorkHistory} alt="/" />
            <p className="text">出勤紀錄</p>
          </li>
          <li className="li">
            <Image src={personalfile} alt="/" />
            <p className="text">個人檔案</p>
          </li>
          <div className=" flex justify-center">
            <hr className=" border-1 height-[1px] w-[70%]" />
          </div>
          <li className="li">
            <p onClick={() => signOut()} className="text text-lg">
              登出
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropDownlist;
