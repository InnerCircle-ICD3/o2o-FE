"use client";

import * as style from "@/styles/common.css";
import Image from "next/image";
import * as styles from "./storeCard.css";

interface StoreCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  originalPrice: number;
  salePrice: number;
  rating: number;
  reviews: number;
  distance: string;
  label?: string;
}

export const StoreCard: React.FC<StoreCardProps> = ({
  imageUrl,
  title,
  subtitle,
  originalPrice,
  salePrice,
  rating,
  reviews,
  distance,
  label = "판매중",
}) => {
  return (
    <div className={styles.card}>
      <Image
        src={imageUrl}
        alt={title}
        className={styles.image}
        width={240}
        height={140}
        priority={false}
      />
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        <article>
          <div className={styles.titleWrapper}>
            <h2 className={style.title}>냠냠디저트</h2>
            <div className={styles.subtitle}>{subtitle}</div>
          </div>
          <div className={style.reviewAndDistanceWrapper}>
            <Image src={"/icons/review.svg"} alt={""} width={16} height={16} />
            <span>
              <strong>{rating.toFixed(1)}</strong> ({reviews}) · {distance}
            </span>
          </div>
        </article>
        <div className={styles.priceWrapper}>
          <div className={styles.originalPrice}>{originalPrice.toLocaleString()}₩</div>
          <div className={styles.salePrice}>{salePrice.toLocaleString()}₩</div>
        </div>
      </div>
    </div>
  );
};
