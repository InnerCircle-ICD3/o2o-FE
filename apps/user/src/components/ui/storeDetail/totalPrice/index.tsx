import * as style from "./totalPrice.css";

const TotalPrice = () => {
  return (
    <div className={style.container}>
      <p className={style.count}>총 수량 1개</p>

      <div className={style.amountWrapper}>
        <div className={style.row}>
          <span className={style.label}>총 금액</span>
          <strong className={style.price}>14,000</strong>
        </div>
        <div className={style.row}>
          <span className={style.label}>나의 할인가</span>
          <strong className={style.price}>13,300</strong>
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
