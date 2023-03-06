import React from 'react';
import Image from 'next/image';
import { Users } from '../../types';
import { useSession } from 'next-auth/react';
function EachUser({ user }: any) {
  const { data: session } = useSession();

  return (
    <li className="trackLi">
      <Image className="rounded-full" src={user.image} width={40} height={40} alt="/" />
      <div className=" flex flex-col">
        <h1 className="">{user.name}</h1>
        <div className=" flex space-x-3 textGray">
          <h2>office</h2>
          <h2>Remote</h2>
        </div>
      </div>

      <button className=" bg-[#DEECDC] rounded-lg py-2 px-5">Online</button>
    </li>
  );
}

export default EachUser;
