import {
  useMutation,
  type UseMutateAsyncFunction,
} from '@tanstack/react-query';
import {
  type ReactNode,
  createContext,
  useContext,
  useCallback,
  useState,
} from 'react';

import type { AuthValidator } from '../validations/auth';
import { IUser } from '../models/user-DTO';
import { mmkvStorage } from '../storage/mmkvStorage';

export const AuthContext = createContext<{
  login: any;
  isLogged: boolean;
  status: 'idle' | 'pending' | 'success' | 'error';
  error: Error | null;
  logout: () => void;
  user: IUser | null;
} | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const { getItem, containsItem, removeItem, setItem } = mmkvStorage;
  const [user, setUser] = useState<IUser | null>(null);

  const {
    mutateAsync: login,
    status,
    error,
  } = useMutation({
    mutationKey: ['signin'],
    mutationFn: async (data: AuthValidator) => {
      // const { token, user: apiUser } = await signInAPI(data);
      // setItem('user', JSON.stringify(apiUser));
      // setItem('token', token);
      // setUser(apiUser);
      // return { token, user };
    },
  });

  const logout = useCallback(() => {
    if (Boolean(containsItem('user'))) {
      removeItem('user');
      removeItem('token');
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        isLogged: Boolean(user) && Boolean(containsItem('user')),
        status,
        error,
        user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};
