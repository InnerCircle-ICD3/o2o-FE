"use client";

import Button from "@/components/common/button";
import { useState } from "react";
import ProductBottomSheet from "../productBottomSheet";
import * as style from "./productSelector.css";

const ProductSelector = () => {
  const [isShow, setIsShow] = useState(false);

  const handleOpenSelector = () => {
    setIsShow(true);
  };

  const handleCloseSelector = () => {
    setIsShow(false);
  };

  return (
    <>
      <div className={style.fixedButton}>
        <Button status={"primary"} type={"button"} onClick={handleOpenSelector}>
          주문하기
        </Button>
      </div>

      <ProductBottomSheet isShow={isShow} onClose={handleCloseSelector} />
    </>
  );
};

export default ProductSelector;
