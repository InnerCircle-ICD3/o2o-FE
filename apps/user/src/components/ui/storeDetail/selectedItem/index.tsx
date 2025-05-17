import * as globalStyle from "@/styles/global.css";
import type { SelectedProduct } from "@/types/apis/store.type";
import { formatCurrency } from "@/utils/format";
import classNames from "classnames";
import Image from "next/image";
import * as style from "./selectedItem.css";

interface SelectedItemProps {
  product: SelectedProduct;
  onDelete: (productId: number) => void;
  onUpdateCount: (productId: number, delta: number) => void;
}

const SelectedItem = (props: SelectedItemProps) => {
  const { product, onDelete, onUpdateCount } = props;

  return (
    <div className={classNames(style.container, globalStyle.grayBackground)}>
      <button className={style.deleteButton} type={"button"} onClick={() => onDelete(product.id)}>
        <Image src={"/icons/btn_close_white.svg"} alt={"삭제"} width={14} height={14} />
      </button>
      <h3 className={style.title}>{product.name}</h3>

      <div className={style.wrapper}>
        <div className={style.count}>
          <button
            className={style.countButton}
            type={"button"}
            onClick={() => onUpdateCount(product.id, -1)}
          >
            <Image src={"/icons/decrease.svg"} alt={"상품 수량 감소"} width={10} height={10} />
          </button>
          <p className={style.length}>{product.selectedCount}</p>
          <button
            className={style.countButton}
            type={"button"}
            onClick={() => onUpdateCount(product.id, 1)}
          >
            <Image src={"/icons/increase.svg"} alt={"상품 수량 증가"} width={10} height={10} />
          </button>
        </div>
        <p className={style.price}>
          {formatCurrency(product.price.finalPrice * product.selectedCount)}
        </p>
      </div>
    </div>
  );
};

export default SelectedItem;
