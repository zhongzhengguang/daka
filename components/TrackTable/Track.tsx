import React from 'react';
import Image from 'next/image';
import EachUser from './EachUser';
import { UserData } from '../../types';

function Track({ users }: UserData) {
  return (
    <div className=" mt-10 flex flex-col items-center justify-center ">
      <ul className="track p-5">
        {users ? (
          <div>
            {users.map((user) => (
              <EachUser user={user} key={user.id} />
            ))}
          </div>
        ) : null}
      </ul>
    </div>
  );
}

export default Track;
