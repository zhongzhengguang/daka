import React, { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Date from '@/components/Time/Date';
import CheckButton from '@/components/CheckButton';
import Track from '@/components/Track';

function check() {
  return (
    <div>
      <Navbar />
      <Date />
      <CheckButton />
      <p className="textGray flex justify-center mt-10">Kiitzu的小夥伴們</p>
      <Track />
    </div>
  );
}

export default check;
