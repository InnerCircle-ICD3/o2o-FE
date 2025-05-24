import { StoreCard } from "@/components/ui/storeList/storeCard";
import { productTitle } from "@/styles/common.css";
import * as styles from "./page.css";

export default async function Home() {
  return (
    <div className={styles.myStyle}>
      <h2 className={productTitle}>우리동네에서 지금 할인중이에요!</h2>
      <StoreCard
        imageUrl="/assets/dessert.jpg"
        title="남남 디저트"
        subtitle="김밥 / 주먹밥 / 가정식"
        originalPrice={10000}
        salePrice={5000}
        rating={4.7}
        reviews={257}
        distance="1km"
      />
    </div>
  );
}
