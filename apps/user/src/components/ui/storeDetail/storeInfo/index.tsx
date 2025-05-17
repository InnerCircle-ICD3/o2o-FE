import * as globalStyle from "@/styles/global.css";
import classNames from "classnames";
import Image from "next/image";
import * as style from "./storeInfo.css";

const StoreInfo = () => {
  return (
    <>
      <div className={style.thumbnail}>
        <Image src={"/images/thumb.png"} alt={""} fill />
      </div>
      <article className={globalStyle.innerPadding}>
        <h2 className={style.title}>냠냠 샌드위치</h2>
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
              19:00 ~ 21:00
            </strong>
          </div>

          <div className={style.iconDescription}>
            <Image src={"/icons/description.svg"} alt={""} width={15} height={15} />

            <span>
              저희 냠냠치킨은 1인 가구를 위해 최대한 푸짐하게 먹을 수 있는 샌드위치를 만들고
              있습니다. 저희 제품은 픽업 후 1시간 이내에 드시는 것을 권장합니다.
            </span>
          </div>
        </div>

        <div className={classNames(style.metaSection, globalStyle.grayBackground)}>
          <div className={style.metaRow}>
            <p className={style.metaLabel}>주소</p>
            <p className={style.metaValue}>서울 성동구 무학봉로 525-2층</p>
          </div>

          <div className={style.metaRow}>
            <p className={style.metaLabel}>연락처</p>
            <p className={style.metaValue}>010-1234-1234</p>
          </div>

          <div className={style.metaRow}>
            <p className={style.metaLabel}>카테고리</p>
            <p className={style.metaValue}>빵</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default StoreInfo;
