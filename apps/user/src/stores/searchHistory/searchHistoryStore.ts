import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type SearchHistoryStore = {
  searchHistory: string[];
  addSearchHistory: (keyword: string) => void;
  removeSearchHistory: (keyword: string) => void;
  clearSearchHistory: () => void;
};

export const useSearchHistoryStore = create<SearchHistoryStore>()(
  persist(
    (set) => ({
      searchHistory: [],
      addSearchHistory: (keyword: string) =>
        set((state) => ({ searchHistory: [...state.searchHistory, keyword] })),
      removeSearchHistory: (keyword: string) =>
        set((state) => ({ searchHistory: state.searchHistory.filter((item) => item !== keyword) })),
      clearSearchHistory: () => set({ searchHistory: [] }),
    }),
    { name: "searchHistory", storage: createJSONStorage(() => localStorage) },
  ),
);
