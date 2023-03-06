import React from 'react';
import Image from 'next/image';
import EachUser from './EachUser';
import { UserData } from '../../types';

function Track({ users }: UserData) {
  return (
    <div className=" flex flex-col justify-center items-center mt-10 ">
      <ul className="track p-5">
        {users.map((user) => (
          <EachUser user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
}

export default Track;
