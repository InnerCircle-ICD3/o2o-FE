import * as globalStyle from "@/styles/global.css";
import classNames from "classnames";
import Image from "next/image";
import * as style from "./selectedItem.css";

const SelectedItem = () => {
  return (
    <div className={classNames(style.container, globalStyle.grayBackground)}>
      <button className={style.deleteButton} type={"button"}>
        <Image src={"/icons/btn_close_white.svg"} alt={""} width={14} height={14} />
      </button>
      <h3 className={style.title}>상품상품상품상품품</h3>

      <div className={style.wrapper}>
        <div className={style.count}>
          <button className={style.countButton} type={"button"}>
            <Image src={"/icons/decrease.svg"} alt={""} width={10} height={10} />
          </button>
          <p className={style.length}>999</p>
          <button className={style.countButton} type={"button"}>
            <Image src={"/icons/increase.svg"} alt={""} width={10} height={10} />
          </button>
        </div>
        <p className={style.price}>13,300</p>
      </div>
    </div>
  );
};

export default SelectedItem;
