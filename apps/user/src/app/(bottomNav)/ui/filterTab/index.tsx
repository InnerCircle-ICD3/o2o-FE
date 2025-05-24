"use client";

import BottomSheet from "@/components/common/bottomSheet";
import Button from "@/components/common/button";
import { useBottomSheet } from "@/hooks/useBottomSheet";
import { formatTime } from "@/utils/format";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import * as styles from "./filterTab.css";

type DayType = "오전" | "오후";
type HourType = number & { __brand: "Hour" };
type MinuteType = number & { __brand: "Minute" };

type PickupTime = {
  day: DayType;
  hour: HourType;
  minute: MinuteType;
};

const foodTypeList = ["빵", "디저트", "한식", "과일", "피자", "샐러드"];

const pickupTimeDefaultValue: PickupTime = {
  day: "오전",
  hour: 0 as HourType,
  minute: 0 as MinuteType,
};

export default function FilterTab() {
  const [activeTab, setActiveTab] = useState<string>("reservation");
  const [tempSelectedFoodType, setTempSelectedFoodType] = useState<string>();
  const [selectedFoodType, setSelectedFoodType] = useState<string>();
  const [tempPickupTime, setTempPickupTime] = useState<PickupTime>(pickupTimeDefaultValue);
  const [selectedPickupTime, setSelectedPickupTime] = useState<Partial<PickupTime>>({});

  const { showBottomSheet, handleShowBottomSheet, handleCloseBottomSheet } = useBottomSheet();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    handleShowBottomSheet(tab);
  };

  const handleTempFoodTypeClick = (foodType: string) => {
    setTempSelectedFoodType(foodType);
  };

  const handleFoodTypeClick = () => {
    setSelectedFoodType(tempSelectedFoodType);
    handleCloseBottomSheet("foodType");
  };

  const handleResetClick = () => {
    setSelectedFoodType("");
    setTempSelectedFoodType("");
  };

  const handleTempPickupTimeClick = (values: Partial<PickupTime>) => {
    setTempPickupTime((prev) => ({ ...prev, ...values }));
  };

  const handlePickupTimeClick = () => {
    setSelectedPickupTime(tempPickupTime);
    handleCloseBottomSheet("pickupTime");
  };

  const handleResetPickupTimeClick = () => {
    setSelectedPickupTime({});
    setTempPickupTime(pickupTimeDefaultValue);
  };

  console.log(selectedFoodType);
  return (
    <>
      <div className={styles.container}>
        <button
          type="button"
          className={styles.tab({ active: activeTab === "reservation" })}
          onClick={() => handleTabClick("reservation")}
        >
          <span
            className={styles.textStyle({ type: "tab", parentActive: activeTab === "reservation" })}
          >
            예약가능만
          </span>
        </button>
        <button
          type="button"
          className={styles.tab({ active: activeTab === "foodType" })}
          onClick={() => handleTabClick("foodType")}
        >
          <span
            className={styles.textStyle({ type: "tab", parentActive: activeTab === "foodType" })}
          >
            {selectedFoodType ? selectedFoodType : "음식 종류"}
          </span>
          <Image
            src="/icons/dropdown_off.svg"
            alt="filter"
            width={16}
            height={16}
            className={styles.imageStyle({ parentActive: activeTab === "foodType" })}
          />
        </button>
        <button
          type="button"
          className={styles.tab({ active: activeTab === "pickupTime" })}
          onClick={() => handleTabClick("pickupTime")}
        >
          <Image
            src="/icons/clock.svg"
            alt="clock"
            width={14}
            height={14}
            className={styles.imageStyle({ parentActive: activeTab === "pickupTime" })}
          />
          <span
            className={styles.textStyle({ type: "tab", parentActive: activeTab === "pickupTime" })}
          >
            픽업 가능시간
          </span>
          <span
            className={classNames(
              styles.pickupTime,
              selectedPickupTime.day ? styles.pickupTimeActive : "",
            )}
          >
            {selectedPickupTime.day
              ? `${selectedPickupTime.day} ${formatTime(Number(selectedPickupTime.hour))}:${formatTime(Number(selectedPickupTime.minute))}`
              : "픽업 가능시간"}
          </span>
        </button>
      </div>

      {/* 음식 종류 선택 */}
      <BottomSheet
        type="shadow"
        isShow={showBottomSheet.has("foodType")}
        title="음식 종류"
        onClose={() => handleCloseBottomSheet("foodType")}
      >
        <ul className={styles.filterListStyle}>
          {foodTypeList.map((item) => (
            <li
              className={
                tempSelectedFoodType === item
                  ? styles.filterListItemSelected
                  : styles.filterListItemHover
              }
              key={item}
            >
              <button
                className={styles.filterListItemButtonStyle}
                type="button"
                onClick={() => handleTempFoodTypeClick(item)}
              >
                <span>{item}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.filterButtonContainer}>
          <Button status="common" onClick={handleResetClick}>
            초기화
          </Button>
          <Button status="primary" onClick={handleFoodTypeClick}>
            선택완료
          </Button>
        </div>
      </BottomSheet>

      {/* 픽업 가능시간 선택 */}
      <BottomSheet
        type="shadow"
        isShow={showBottomSheet.has("pickupTime")}
        title="픽업 가능시간"
        onClose={() => handleCloseBottomSheet("pickupTime")}
      >
        <div className={styles.timePickerContainer}>
          <ul className={styles.timePickerColumn}>
            {["오전", "오후"].map((day) => (
              <li key={day}>
                <button
                  type="button"
                  className={tempPickupTime.day === day ? styles.timeItemSelected : styles.timeItem}
                  onClick={() => handleTempPickupTimeClick({ day: day as "오전" | "오후" })}
                >
                  {day}
                </button>
              </li>
            ))}
          </ul>
          <ul className={styles.timePickerColumn}>
            {Array.from({ length: 13 }).map((_, index) => (
              /**
               * biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
               * 숫자형 데이터 이므로, 배열의 인덱스를 키로 사용해도 무방하여 린트 주석 처리 했습니다.
               * */
              <li key={index}>
                <button
                  type="button"
                  className={
                    tempPickupTime.hour === index ? styles.timeItemSelected : styles.timeItem
                  }
                  onClick={() => handleTempPickupTimeClick({ hour: index as HourType })}
                >
                  <span>{formatTime(index)}</span>
                </button>
              </li>
            ))}
          </ul>
          <ul className={styles.timePickerColumn}>
            {Array.from({ length: 12 }).map((_, index) => (
              /**
               * biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
               * 숫자형 데이터 이므로, 배열의 인덱스를 키로 사용해도 무방하여 린트 주석 처리 했습니다.
               * */
              <li key={index}>
                <button
                  type="button"
                  className={
                    tempPickupTime.minute === 5 * index ? styles.timeItemSelected : styles.timeItem
                  }
                  onClick={() => handleTempPickupTimeClick({ minute: (5 * index) as MinuteType })}
                >
                  <span>{formatTime(5 * index)}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.filterButtonContainer}>
          <Button status="common" onClick={handleResetPickupTimeClick}>
            초기화
          </Button>
          <Button status="primary" onClick={handlePickupTimeClick}>
            시간 적용
          </Button>
        </div>
      </BottomSheet>
    </>
  );
}
