import Checkbox from "@/components/common/checkbox";
import Image from "next/image";
import { useState } from "react";
import * as style from "./select.css";

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonStyle = isOpen ? style.button.opened : style.button.default;

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={style.container}>
      <button className={buttonStyle} type={"button"} onClick={handleToggle}>
        럭키백 선택
        <Image src={"/icons/dropdown_off.svg"} alt={""} width={20} height={20} />
      </button>

      {isOpen && (
        <ul className={style.list}>
          <li>
            <label className={style.item}>
              <Checkbox
                checked={false}
                onChange={() => {
                  console.log("???");
                }}
              />
              <span>상품 이름입니다.</span>
            </label>
          </li>
          <li>
            <label className={style.item}>
              <Checkbox
                checked={false}
                onChange={() => {
                  console.log("???");
                }}
              />
              <span>상품 이름입니다.</span>
            </label>
          </li>
          <li>
            <label className={style.item}>
              <Checkbox
                checked={false}
                onChange={() => {
                  console.log("???");
                }}
              />
              <span>상품 이름입니다.</span>
            </label>
          </li>
          <li>
            <label className={style.item}>
              <Checkbox
                checked={false}
                onChange={() => {
                  console.log("???");
                }}
              />
              <span>상품 이름입니다.</span>
            </label>
          </li>
          <li>
            <label className={style.item}>
              <Checkbox checked={false} onChange={() => {}} />
              <span>상품 이름입니다.</span>
            </label>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Select;
