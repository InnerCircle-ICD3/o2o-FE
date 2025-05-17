"use client";

import Button from "@/components/common/button";
import type { Product } from "@/types/apis/store.type";
import { useState } from "react";
import ProductBottomSheet from "../productBottomSheet";
import * as style from "./productSelector.css";

interface ProductSelectorProps {
  storeProducts: Product[];
}

const ProductSelector = (props: ProductSelectorProps) => {
  const { storeProducts } = props;
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

      <ProductBottomSheet
        isShow={isShow}
        storeProducts={storeProducts}
        onClose={handleCloseSelector}
      />
    </>
  );
};

export default ProductSelector;
