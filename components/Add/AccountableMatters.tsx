import React from 'react';
import { useState } from 'react';
function AccountableMatters() {
  const [prompt, setPrompt] = useState('');
  return (
    <div className="relative flex flex-col items-center mt-5">
      <h1 className=" textGray">交接事項</h1>
      <input
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
        type="text"
        placeholder="交接事項 "
        className="bg-white rounded-lg w-[400px] h-[200px] px-2 mt-5 mx-2 "
      />
      <button disabled={!prompt} className="checkin mt-10 px-10 py-2 disabled:bg-gray-300 ">
        確定
      </button>
    </div>
  );
}

export default AccountableMatters;
