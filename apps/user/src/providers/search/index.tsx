"use client";

import SearchInput from "@/app/(topNav)/search/ui/searchInput";
import SearchResult from "@/app/(topNav)/search/ui/searchResult";
import { useAutoComplete } from "@/hooks/useAutoComplete";
import { type ReactNode, createContext, useContext } from "react";

interface SearchContextType {
  inputValue: string;
  setInputValue: (value: string) => void;
  isFocused: boolean;
  setIsFocused: (value: boolean) => void;
  finalSuggestions: string[];
  searchHistory: string[];
  handleSelect: (value: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleRemoveSearchHistory: (value: string) => void;
  clearSearchHistory: () => void;
}

const SearchContext = createContext<SearchContextType | null>(null);

interface SearchProps {
  children: ReactNode;
}

export function SearchProvider({ children }: SearchProps) {
  const autoComplete = useAutoComplete();

  return <SearchContext.Provider value={autoComplete}>{children}</SearchContext.Provider>;
}

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

SearchProvider.Input = SearchInput;
SearchProvider.Result = SearchResult;
