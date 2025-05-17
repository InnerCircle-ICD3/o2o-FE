import * as globalStyle from "@/styles/global.css";
import Image from "next/image";
import * as style from "./products.css";

import StatusLabel from "@/components/common/statusLabel";
import type { Product } from "@/types/apis/store.type";
import { formatCurrency } from "@/utils/format";
import generateProductStatus from "@/utils/productStatus";
import classNames from "classnames";

const PRODUCTS_IMAGE = {
  // biome-ignore lint/style/useNamingConvention: false
  S: "/images/back_s.png",
  // biome-ignore lint/style/useNamingConvention: false
  M: "/images/back_m.png",
  // biome-ignore lint/style/useNamingConvention: false
  L: "/images/back_l.png",
};

interface ProductsProps {
  storeProducts: Product[];
}

const Products = (props: ProductsProps) => {
  const { storeProducts } = props;

  return (
    <ul className={style.container}>
      {storeProducts.map((product) => {
        const { status, label } = generateProductStatus(product.inventory.quantity);
        return (
          <li key={product.id} className={style.wrapper}>
            <div className={style.thumbnail}>
              <Image src={PRODUCTS_IMAGE[product.size]} alt={""} width={88} height={105} />

              {status === "soldOut" && <div className={style.shadowLabel} />}

              <div className={style.productLabel}>
                <StatusLabel status={status}>{label}</StatusLabel>
              </div>
            </div>

            <div className={style.infoWrapper}>
              <h3 className={style.strongText}>{product.name}</h3>
              <p className={style.subText}>{product.description}</p>
              <p className={style.subText}>{product.foodType.join(", ")}</p>
              <p className={classNames(style.subText, globalStyle.middleStroke)}>
                {formatCurrency(product.price.originalPrice)}
              </p>
              <p className={style.strongText}>{formatCurrency(product.price.finalPrice)}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
