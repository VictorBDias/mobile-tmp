import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { IUser } from '../models/user-DTO';
import { mmkvStorage } from '../storage/mmkvStorage';

interface UserState {
  user: IUser | null;
}

interface UserStore extends UserState {
  setUser: (user: IUser) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    set => ({
      user: null,
      setUser: user => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);
