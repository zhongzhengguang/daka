import PersonalLeaveNavbar from '@/components/Navbar/PersonalLeaveNavbar';
import React from 'react';
import AddHoliday from '@/components/Add/AddHoliday';
import FullDayOrHalfDay from '@/components/FullDayOrHalfDay/FullDayOrHalfDay';
import AddPeople from '@/components/Add/AddPeople';
import AccountableMatters from '@/components/Add/AccountableMatters';
import { UserData } from '../types';
interface Props {
  userData: UserData;
}
function personalLeave({ userData }: Props) {
  return (
    <div className="bg-[#F3F6F8] w-screen z-[1] relative ">
      <PersonalLeaveNavbar />
      <AddHoliday />
      <FullDayOrHalfDay />
      <AddPeople users={userData.users} />
      <AccountableMatters />
    </div>
  );
}

export default personalLeave;
export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/user');
  const data = await response.json();
  return {
    props: {
      userData: data,
    },
  };
};
