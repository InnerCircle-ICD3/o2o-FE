"use client";

import ROUTE from "@/constants/route";
import Image from "next/image";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import type { PropsWithChildren } from "react";
import * as style from "./topNav.css";

const TopNav = (props: PropsWithChildren) => {
  const { children } = props;
  const segment = useSelectedLayoutSegment();
  const router = useRouter();

  const route = Object.values(ROUTE.topNav).find((item) => {
    return item.path.includes(segment ?? "");
  });

  if (!route) {
    throw new Error("Route not found");
  }

  return (
    <div className={style.container}>
      <header className={style.topNav}>
        <button className={style.backButton} type={"button"} onClick={router.back}>
          <Image src={"/icons/chevron_left.svg"} alt="뒤로가기" width={24} height={24} />
        </button>
        <h1 className={style.title}>{route.name}</h1>
        <div className={style.empty} />
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
};

export default TopNav;
