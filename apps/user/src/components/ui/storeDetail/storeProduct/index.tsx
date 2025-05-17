import * as globalStyle from "@/styles/global.css";
import Products from "../products";
import * as style from "./storeProduct.css";

const StoreProduct = () => {
  return (
    <article className={globalStyle.innerPadding}>
      <h2 className={style.productTitle}>
        <span className={globalStyle.primaryColor}>냠냠치킨</span>에서 지금 판매중이에요!
      </h2>

      <Products />
    </article>
  );
};

export default StoreProduct;
