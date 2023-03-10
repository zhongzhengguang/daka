import React, { useState } from 'react';
import { UserData } from '../../types';
import EachUser from '../TrackTable/EachUser';
function AddPeople({ users }: UserData) {
  const [notice, setNotice] = useState(false);
  const [addUser, setAddUser] = useState('新增人員');
  const handleAddUser = (selectedUser: any) => {
    setAddUser(`${selectedUser.name}`);
    setNotice(!notice);
  };
  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={() => setNotice(!notice)}
        className="bg-white rounded-lg flex justify-between w-[400px] p-3 mt-10 mx-2"
      >
        <div>
          <span className="text-[#868A93]">寄送通知</span>
        </div>
        <div className="textDarkBlue font-bold">{addUser}</div>
      </button>
      {notice && (
        <div className="bg-white rounded-lg flex flex-col justify-between space-y-2 w-[400px] py-3 px-2 absolute top-[100px] z-10">
          {users.map((user) => (
            <div key={user.id} onClick={() => handleAddUser(user)}>
              <h1 className="textDarkBlue py-5 flex justify-center">{user.name}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AddPeople;
