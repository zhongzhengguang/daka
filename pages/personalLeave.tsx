import PersonalLeaveNavbar from '@/components/Navbar/PersonalLeaveNavbar';
import React from 'react';
import Image from 'next/image';
import AddHoliday from '@/components/AddHoliday';
import FullDayOrHalfDay from '@/components/FullDayOrHalfDay';
function personalLeave() {
  return (
    <div className="bg-[#F3F6F8] w-screen h-screen z-[1] relative ">
      <PersonalLeaveNavbar />
      <AddHoliday />
      <FullDayOrHalfDay />
    </div>
  );
}

export default personalLeave;
