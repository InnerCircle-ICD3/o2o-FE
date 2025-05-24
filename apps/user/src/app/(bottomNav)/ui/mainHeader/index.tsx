"use client";

import BottomSheet from "@/components/common/bottomSheet";
import Button from "@/components/common/button";
import { useBottomSheet } from "@/hooks/useBottomSheet";
import Image from "next/image";
import Link from "next/link";
import * as styles from "./mainHeader.css";

export default function MainHeader() {
  const { showBottomSheet, handleShowBottomSheet, handleCloseBottomSheet } = useBottomSheet();

  return (
    <>
      <header className={styles.mainHeader}>
        <button
          className={styles.mainHeaderLeft}
          onClick={() => handleShowBottomSheet("location")}
          type="button"
        >
          <Image src="/icons/store.svg" alt="store" width={24} height={24} />
          <h1 className={styles.mainTitle}>모든 지역의 가게</h1>
        </button>
        <div className={styles.mainHeaderRight}>
          <button type="button">
            <Image src="/icons/notice.svg" alt="notice" width={24} height={24} />
          </button>
          <button type="button">
            <Image src="/icons/bookmark.svg" alt="bookmark" width={24} height={24} />
          </button>
          <Link href="/search">
            <Image src="/icons/search.svg" alt="search" width={24} height={24} />
          </Link>
        </div>
      </header>

      <BottomSheet
        type="shadow"
        isShow={showBottomSheet.has("location")}
        title="지역을 선택해주세요"
        onClose={() => handleCloseBottomSheet("location")}
      >
        <ul className={styles.bottomSheetListStyle}>
          <li className={styles.bottomSheetListItemStyle}>
            <button className={styles.bottomSheetListItemButtonStyle} type="button">
              <Image src="/icons/pin.svg" alt="store" width={30} height={30} />
              <span>강남역</span>
            </button>
          </li>
          <li className={styles.bottomSheetListItemStyle}>
            <button className={styles.bottomSheetListItemButtonStyle} type="button">
              <Image src="/icons/add.svg" alt="store" width={30} height={30} />
              <span>자주가는 장소 등록</span>
            </button>
          </li>
        </ul>
        <Button status="primary" style={{ marginTop: 20 }}>
          선택완료
        </Button>
      </BottomSheet>
    </>
  );
}
