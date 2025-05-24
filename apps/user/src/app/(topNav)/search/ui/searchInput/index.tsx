import { searchInputWrapper } from "./searchInput.css";

export default function SearchInput() {
  // const { inputValue, setInputValue, isFocused, setIsFocused, handleKeyDown } = useSearch();

  return (
    <div className={searchInputWrapper}>
      {/* <input
                type="text"
                placeholder="검색어를 입력해주세요."
                className={searchInput}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onKeyDown={handleKeyDown}
            />
            <button type="button" className={searchButton}>
                <Image src="/icons/search.svg" alt="search" width={24} height={24} />
            </button> */}
    </div>
  );
}
