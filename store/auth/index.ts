import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface User {
  id: number;
  accessToken: string;
}

interface AuthState {
  user?: User;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: undefined,
        setUser: (user) => set((state) => ({ user })),
        clearUser: () => set((state) => ({ user: undefined })),
      }),
      {
        name: "ootw-authentication",
      }
    )
  )
);
