import * as globalStyle from "@/styles/global.css";
import Image from "next/image";
import * as style from "./products.css";

import StatusLabel from "@/components/common/statusLabel";
import generateProductStatus from "@/utils/productStatus";
import classNames from "classnames";

const PRODUCTS_IMAGE = {
  small: "/images/back_s.png",
  medium: "/images/back_m.png",
  large: "/images/back_l.png",
};

interface ProductItem {
  type: keyof typeof PRODUCTS_IMAGE;
  id: number;
  name: string;
  originalPrice: number;
  discountPrice: number;
  variant: string;
  length: number;
}

const mock: ProductItem[] = [
  {
    id: 1,
    name: "냠냠 샌드위치",
    originalPrice: 10000,
    discountPrice: 8000,
    variant: "샌드위치, 햄버거",
    type: "small",
    length: 10,
  },
  {
    id: 2,
    name: "길고 기다라고 기다란 냠냠 치킨너겟",
    originalPrice: 10000,
    discountPrice: 8000,
    variant: "샌드위치, 햄버거",
    type: "medium",
    length: 1,
  },
  {
    id: 3,
    name: "냠냠 햄버거",
    originalPrice: 10000,
    discountPrice: 8000,
    variant: "샌드위치, 햄버거",
    type: "large",
    length: 2,
  },
  {
    id: 4,
    name: "냠냠 피자",
    originalPrice: 10000,
    discountPrice: 8000,
    variant: "샌드위치, 햄버거",
    type: "large",
    length: 0,
  },
];

const Products = () => {
  return (
    <ul className={style.container}>
      {mock.map((product) => {
        const { status, label } = generateProductStatus(product.length);
        return (
          <li key={product.id} className={style.wrapper}>
            <div className={style.thumbnail}>
              <Image src={PRODUCTS_IMAGE[product.type]} alt={""} width={88} height={105} />

              {status === "soldOut" && <div className={style.shadowLabel} />}

              <div className={style.productLabel}>
                <StatusLabel status={status}>{label}</StatusLabel>
              </div>
            </div>

            <div className={style.infoWrapper}>
              <h3 className={style.strongText}>{product.name}</h3>
              <p className={style.subText}>{product.variant}</p>
              <p className={classNames(style.subText, globalStyle.middleStroke)}>
                {product.originalPrice}
              </p>
              <p className={style.strongText}>{product.discountPrice}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
