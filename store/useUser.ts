import { create } from "zustand";
import { IUser } from "../app";

interface Store {
  user: IUser | null;
  actions: {
    storeUser: (user: IUser) => void;
    cleanUser: () => void;
  };
}

export const useUser = create<Store>((set) => ({
  user: null,
  actions: {
    storeUser: (user: IUser) => set({ user }),
    cleanUser: () => set({ user: null }),
  },
}));
