import Image from "next/image";
import * as styles from "./searchResult.css";

export default function SearchResult() {
  // const { finalSuggestions, isFocused } = useSearch();

  return (
    <>
      <ol className={styles.recommendSearchContainer}>
        <h2 className={styles.searchTitle}>
          추천 검색어 <span className={styles.emphasize}>Top 3</span>
        </h2>
        <li className={styles.listStyle}>
          <span className={styles.emphasize}>1</span>
          <span>ㅌㅌㅌㅌ</span>
        </li>
      </ol>
      <ul className={styles.recentSearchContainer}>
        <h2 className={styles.searchTitle}>최근 검색어</h2>
        <li className={styles.listStyle}>
          <Image src={"/icons/clock.svg"} alt="recent" width={14} height={14} />
          <span className={styles.text}>최근 검색어</span>
        </li>
        {/* {finalSuggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
            ))} */}
      </ul>
    </>
  );
}
