import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import left from '../../public/left.png';
import whitebg from '../../public/whitebg.png';
function PersonalLeaveNavbar() {
  const holidays = [
    {
      id: 1,
      day: '10天 ',
      canUse: '可用',
      EachLeave: '特休',
      bg: 'bg-[#DEECDC]',
    },
    {
      id: 2,
      day: '10天 ',
      canUse: '可用',
      EachLeave: '病假',
      bg: 'bg-[#FAE3DE]',
    },
    {
      id: 3,
      day: '10天 ',
      canUse: '可用',
      EachLeave: '陪產假',
      bg: 'bg-[#F3F6F8]',
    },
    {
      id: 4,
      day: '10天 ',
      canUse: '可用',
      EachLeave: '喪假',
      bg: 'bg-[#E9E9E9]',
    },
  ];

  return (
    <div>
      <Image src={whitebg} alt="whitebg" className="backgroundImage" />
      <div className=" flex justify-between pt-10 px-5 w-[400px]">
        <Link href="/">
          <Image src={left} alt="left" />
        </Link>
        <h1 className="textDarkBlue font-semibold ">休假餘額預覽</h1>
        <div />
      </div>

      <ul className=" flex justify-between items-center mt-20 px-5">
        {holidays.map((holiday) => (
          <li className="navbarli" key={holiday.id}>
            <div className={`${holiday.bg} navbarlidiv`}>
              <h1>10 天</h1>
              <a>可用</a>
            </div>
            <div>{holiday.EachLeave}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonalLeaveNavbar;
