import { getStoreDetail, getStoreDetailProducts } from "@/apis/ssr/stores";
import ProductSelector from "@/components/ui/storeDetail/productSelector";
import StoreInfo from "@/components/ui/storeDetail/storeInfo";
import StoreProducts from "@/components/ui/storeDetail/storeProducts";
import * as style from "./storeDetail.css";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async (props: PageProps) => {
  const { params } = props;
  const { id } = await params;

  const storeDetail = await getStoreDetail(id);
  const storeProducts = await getStoreDetailProducts(id);

  return (
    <section className={style.container}>
      <StoreInfo storeDetail={storeDetail} />
      <StoreProducts storeDetail={storeDetail} storeProducts={storeProducts} />
      <ProductSelector storeProducts={storeProducts} />
    </section>
  );
};

export default Page;
