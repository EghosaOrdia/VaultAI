import { create } from "zustand";

type ErrorState = {
  error: string;
  setError: (err: string) => void;
};

export const useErrorStore = create<ErrorState>((set) => ({
  error: "",
  setError: (error) => {
    set({ error });
    setTimeout(() => {
      set({ error: "" });
    }, 3000);
  },
}));
