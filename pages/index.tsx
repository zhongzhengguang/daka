import Head from 'next/head';
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Date from '@/components/Time/Date';
import Track from '@/components/TrackTable/Track';
import WorkingTime from '@/components/Time/WorkingTime';
import { UserData } from '../types';

interface Props {
  userData: UserData;
}
export default function Home({ userData }: Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Date />
      <WorkingTime />
      <p className="textGray flex justify-center mt-10">Kiitzu的小夥伴們</p>
      <Track users={userData.users} />
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/user');
  const data = await response.json();
  return {
    props: {
      userData: data,
    },
  };
};
