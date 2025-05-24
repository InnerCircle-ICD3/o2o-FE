"use client";

import { SearchProvider } from "@/providers/search";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as styles from "./page.css";
import SearchInput from "./ui/searchInput";
import SearchResult from "./ui/searchResult";

export default function SearchPage() {
  const router = useRouter();

  return (
    <SearchProvider>
      <header className={styles.headerStyle}>
        <button className={styles.backButton} type={"button"} onClick={router.back}>
          <Image src={"/icons/chevron_left.svg"} alt="뒤로가기" width={24} height={24} />
        </button>
        <SearchInput />
      </header>
      <main className={styles.contentStyle}>
        <SearchResult />
      </main>
    </SearchProvider>
  );
}
