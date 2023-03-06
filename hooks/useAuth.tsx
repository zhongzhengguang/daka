import React, { createContext, useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const AuthContext = createContext({
  user: null,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<any>(null);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status == 'authenticated') {
      router.push('/');
    } else if (session.status == 'unauthenticated') {
      router.push('/login');
    }
  }, [session.status]);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
