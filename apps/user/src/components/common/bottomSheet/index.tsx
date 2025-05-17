"use client";

import Image from "next/image";
import { type PropsWithChildren, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as style from "./bottomSheet.css";

interface BottomSheetProps extends PropsWithChildren {
  type?: "common" | "shadow";
  isShow?: boolean;
  title: string;
  onClose: () => void;
}

const BottomSheet = (props: BottomSheetProps) => {
  const { type = "common", isShow, title, children, onClose } = props;
  const [bottomElement, setBottomElement] = useState<HTMLDivElement | null>(null);

  const isShadow = type === "shadow";

  const innerType = isShadow ? style.shadowInner : style.commonInner;
  const innerStyle = isShow ? innerType.visible : innerType.hidden;

  const containerStyle = isShow ? style.container.visible : style.container.hidden;

  useEffect(() => {
    const bottomElement = document.querySelector<HTMLDivElement>("#bottom-sheet");

    if (!bottomElement) {
      throw new Error("BottomSheet: bottom element not found");
    }

    setBottomElement(bottomElement);
  }, []);

  if (!bottomElement) return;

  return createPortal(
    <aside className={containerStyle}>
      {isShadow && isShow && <button className={style.shadow} type={"button"} onClick={onClose} />}
      <div className={innerStyle}>
        <div className={style.wrapper}>
          <h2 className={style.header}>{title}</h2>
          <button className={style.close} type={"button"} onClick={onClose}>
            <Image src={"/icons/btn_close.svg"} alt={""} width={24} height={24} />
          </button>
        </div>

        {children}
      </div>
    </aside>,
    bottomElement,
  );
};

export default BottomSheet;
