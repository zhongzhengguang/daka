import '@/styles/global.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../hooks/useAuth';
export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </SessionProvider>
  );
}
