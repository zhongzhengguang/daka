import React, { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Date from '@/components/Time/Date';
import Track from '@/components/TrackTable/Track';
import WorkingTime from '@/components/Time/WorkingTime';
import { useSession } from 'next-auth/react';

function check() {
  return (
    <div>
      <Navbar />
      <Date />
      <WorkingTime />
      <p className="textGray flex justify-center mt-10">Kiitzu的小夥伴們</p>
      <Track />
    </div>
  );
}

export default check;
