import Image from 'next/image';
import LOGO from '../public/LOGO.png';
import googlelogo from '../public/googlelogo.png';
import { useSession, signIn } from 'next-auth/react';
import Footer from '@/components/Footer/Footer';
import loginbg from '../public/loginbg.png';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center h-screen text-center justify-end">
      <Image src={loginbg} alt="loginbg" className="backgroundImage h-screen" />
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
            onClick={() => signIn()}
            className="px-10 py-2 rounded-xl shadow-lg shadow-gray-400 cursor-pointer flex items-center justify-center space-x-3"
          >
            <Image src={googlelogo} alt="/" />
            <p>使用 Google 帳號登入</p>
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
