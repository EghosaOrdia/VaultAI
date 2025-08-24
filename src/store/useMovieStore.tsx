import { create } from "zustand";
import type { movie_props } from "../constants/interfaces";
import type { MovieFormInput } from "../constants/interfaces";

type MovieState = {
  activeQuestionIndex: number;
  setActiveQuestionIndex: (
    indexOrFn: number | ((prev: number) => number)
  ) => void;

  response: string;
  setResponse: (res: string) => void;

  queryDetails: boolean;
  setQueryDetails: (val: boolean) => void;

  movie_d: movie_props[];
  setMovie_d: (data: movie_props[]) => void;

  movieFormData: MovieFormInput;
  setMovieFormData: (
    dataOrFn: MovieFormInput | ((prev: MovieFormInput) => MovieFormInput)
  ) => void;
};

export const useMovieStore = create<MovieState>((set) => ({
  activeQuestionIndex: 0,
  setActiveQuestionIndex: (indexOrFn) =>
    set((state) => ({
      activeQuestionIndex:
        typeof indexOrFn === "function"
          ? indexOrFn(state.activeQuestionIndex)
          : indexOrFn,
    })),

  response: "",
  setResponse: (res) => set({ response: res }),

  queryDetails: false,
  setQueryDetails: (val) => set({ queryDetails: val }),

  movie_d: [],
  setMovie_d: (data) => set({ movie_d: data }),

  movieFormData: {
    favourites: [],
    fav_genres: [],
    fav_actor: "",
    fav_director: "",
    isSimilar: false,
  },
  setMovieFormData: (dataOrFn) =>
    set((state) => ({
      movieFormData:
        typeof dataOrFn === "function"
          ? dataOrFn(state.movieFormData)
          : dataOrFn,
    })),

  updateMovieFormData: (updates: Partial<MovieFormInput>) =>
    set((state) => ({
      movieFormData: {
        ...state.movieFormData,
        ...updates,
      },
    })),
}));
