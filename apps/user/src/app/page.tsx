"use client";

import Counter from "@/components/sample/Counter";
import * as styles from "./page.css";
import StoreList from "@/components/StoreList";
export default function Home() {
  return (
    <div className={styles.myStyle}>
      <h2>우리동네에서 지금 할인중이에요!</h2>
      {/* <Counter /> */}
      <StoreList />
    </div>
  );
}
