import { create } from "zustand";

interface Store {
  auth: boolean;
  actions: {
    login: () => void;
    logout: () => void;
  };
}

export const useAuth = create<Store>((set) => ({
  auth: false,
  actions: {
    login: () => set({ auth: true }),
    logout: () => set({ auth: false }),
  },
}));
