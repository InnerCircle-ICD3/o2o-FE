import Checkbox from "@/components/common/checkbox";
import type { Product, SelectedProduct } from "@/types/apis/store.type";
import Image from "next/image";
import { useState } from "react";
import * as style from "./select.css";

interface SelectProps {
  storeProducts: Product[];
  selectedProducts: SelectedProduct[];
  onChange: (product: Product) => void;
}

const Select = (props: SelectProps) => {
  const { storeProducts, selectedProducts, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);

  const buttonStyle = isOpen ? style.button.opened : style.button.default;

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectProduct = (product: Product) => {
    onChange(product);
    setIsOpen(false);
  };

  return (
    <div className={style.container}>
      <button className={buttonStyle} type={"button"} onClick={handleToggle}>
        럭키백 선택
        <Image src={"/icons/dropdown_off.svg"} alt={""} width={20} height={20} />
      </button>

      {isOpen && (
        <ul className={style.list}>
          {storeProducts.map((product) => {
            const isSoldOut = product.inventory.quantity === 0;
            const itemStyle = isSoldOut ? style.item.soldOut : style.item.default;

            return (
              <li key={product.id}>
                <label className={itemStyle}>
                  <Checkbox
                    checked={selectedProducts.some(
                      (selectedProduct) => selectedProduct.id === product.id,
                    )}
                    disabled={isSoldOut}
                    onChange={() => {
                      handleSelectProduct(product);
                    }}
                  />
                  <span>{product.name}</span>
                </label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
