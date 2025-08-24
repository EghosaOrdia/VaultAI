import { create } from "zustand";

type View = "questions" | "generated";

type ViewStore = {
  view: View;
  setView: (view: View) => void;
};

export const useViewStore = create<ViewStore>((set) => ({
  view: "questions",
  setView: (view) => set({ view }),
}));
