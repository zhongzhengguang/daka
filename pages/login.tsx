import Head from 'next/head';
import Image from 'next/image';
import LOGO from '../public/LOGO.png';
import googlelogo from '../public/googlelogo.png';
import { useSession, signIn, signOut } from 'next-auth/react';
import { UserAuth } from 'hooks/userAuth';
export default function Home() {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col items-center h-screen text-center justify-end ">
      <div className="h-[80%] bottom-0 flex flex-col justify-between">
        <div className="space-y-3">
          <Image src={LOGO} alt="/" className="mx-auto" />
          <p className="textDarkBlue">
            - 你今天
            <span className="textBlue">打卡</span>了嗎 -
          </p>
        </div>
        <div className="mx-auto">
          <button
            onClick={handleGoogleSignIn}
            className="px-10 py-2 rounded-xl shadow-lg shadow-gray-400 cursor-pointer flex items-center justify-center space-x-3"
          >
            <Image src={googlelogo} alt="/" />
            <p>使用 Google 帳號登入</p>
          </button>
        </div>

        <div className="textGray space-y-3 mb-5">
          <p>powered by Kiitzu</p>
          <p>© 2023 豈止數位設計有限公司 Kiitzu, Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
