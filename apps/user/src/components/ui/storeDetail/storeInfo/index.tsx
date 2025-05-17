import * as globalStyle from "@/styles/global.css";
import type { StoreDetail } from "@/types/apis/store.type";
import classNames from "classnames";
import Image from "next/image";
import * as style from "./storeInfo.css";

interface StoreInfoProps {
  storeDetail: StoreDetail;
}

const StoreInfo = (props: StoreInfoProps) => {
  const { storeDetail } = props;

  return (
    <>
      <div className={style.thumbnail}>
        <Image src={storeDetail.mainImageUrl} alt={""} fill />
      </div>
      <article className={globalStyle.innerPadding}>
        <h2 className={style.title}>{storeDetail.name}</h2>
        <div className={style.reviewAndDistanceWrapper}>
          <Image src={"/icons/review.svg"} alt={""} width={16} height={16} />
          <span>
            <strong>4.5</strong> (123) 1km
          </span>
        </div>

        <div className={classNames(style.metaSection, globalStyle.grayBackground)}>
          <div className={style.metaRow}>
            <p className={style.metaLabel}>픽업 시간</p>
            <strong className={classNames(style.metaValue, globalStyle.primaryColor)}>
              {storeDetail.openTime} ~ {storeDetail.closeTime}
            </strong>
          </div>

          <div className={style.iconDescription}>
            <Image src={"/icons/description.svg"} alt={""} width={15} height={15} />

            <span>{storeDetail.description}</span>
          </div>
        </div>

        <div className={classNames(style.metaSection, globalStyle.grayBackground)}>
          <div className={style.metaRow}>
            <p className={style.metaLabel}>주소</p>
            <p className={style.metaValue}>{storeDetail.roadAddress.addressName}</p>
          </div>

          <div className={style.metaRow}>
            <p className={style.metaLabel}>연락처</p>
            <p className={style.metaValue}>{storeDetail.contact}</p>
          </div>

          <div className={style.metaRow}>
            <p className={style.metaLabel}>카테고리</p>
            <p className={style.metaValue}>김밥</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default StoreInfo;
