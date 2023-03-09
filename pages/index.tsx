import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import Navbar from '@/components/Navbar/Navbar';
import Date from '@/components/Time/Date';
import Track from '@/components/TrackTable/Track';
import WorkingTime from '@/components/Time/WorkingTime';
import { UserData } from '../types';
import Footer from '@/components/Footer/Footer';
import checkin from '../public/checkinbg.png';
import checkout from '../public/checkoutbg.png';
import Image from 'next/image';
import WhereAreYouWorkCard from '@/components/WhereAreYouWorkCard/WhereAreYouWorkCard';
import { TimeContext } from 'hooks/useTime';
interface Props {
  userData: UserData;
}
export default function Home({ userData }: Props) {
  const { currentTime, setCurrentTime } = useContext(TimeContext);

  const { card } = useContext(TimeContext);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {currentTime.format('HH:mm') > '18:00' ? (
          <Image src={checkout} alt="checkout" className="backgroundImage" />
        ) : (
          <Image src={checkin} alt="checkin" className="backgroundImage" />
        )}
        {card && <WhereAreYouWorkCard />}
        <Navbar />
        <Date />
        <WorkingTime />
        <p className="textGray flex justify-center mt-10">Kiitzu的小夥伴們</p>
        <Track users={userData.users} />
        <Footer />
      </div>
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
