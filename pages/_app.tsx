import '@/styles/global.css';
import CardProvider from 'hooks/useCard';
import TimeProvider from 'hooks/useTime';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../hooks/useAuth';
export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AuthProvider>
        <TimeProvider>
          <Component {...pageProps} />
        </TimeProvider>
      </AuthProvider>
    </SessionProvider>
  );
}
