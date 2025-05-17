import ProductSelector from "@/components/ui/storeDetail/productSelector";
import StoreInfo from "@/components/ui/storeDetail/storeInfo";
import StoreProduct from "@/components/ui/storeDetail/storeProduct";
import * as style from "./storeDetail.css";

const Page = () => {
  return (
    <section className={style.container}>
      <StoreInfo />
      <StoreProduct />
      <ProductSelector />
    </section>
  );
};

export default Page;
