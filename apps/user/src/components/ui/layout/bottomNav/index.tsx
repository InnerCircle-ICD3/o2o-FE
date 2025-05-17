"use client";

import ROUTE from "@/constants/route";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import type { PropsWithChildren } from "react";
import * as style from "./bottomNav.css";

const BottomNav = (props: PropsWithChildren) => {
  const { children } = props;
  const segment = useSelectedLayoutSegment();

  const bottomNav = Object.values(ROUTE.bottomNav);

  const getRouteStyle = (path: string) => {
    let isActive = false;
    if (segment) {
      isActive = path.includes(segment);
    } else {
      isActive = path === ROUTE.bottomNav.home.path;
    }

    return isActive ? style.navItem.active : style.navItem.default;
  };

  return (
    <div className={style.container}>
      <main className={style.main}>{children}</main>
      <footer>
        <nav className={style.bottomNav}>
          {bottomNav.map(({ path, name, icon: Icon }) => (
            <Link href={path} key={name} className={getRouteStyle(path)}>
              <Icon />
              <span>{name}</span>
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  );
};

export default BottomNav;
