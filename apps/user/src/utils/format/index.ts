// TODO: 테스트를 위해 임시로 추가한 코드
/**
 * 첫 글자를 대문자로 변환합니다.
 */
export const capitalize = (str: string): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * 숫자를 통화 형식으로 포맷팅합니다.
 */
export const formatCurrency = (amount: number): string => {
  return `${Math.round(amount).toLocaleString("ko-KR")}₩`;
};

/**
 * YYYY-MM-DD 형식으로 날짜를 포맷팅합니다.
 */
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

/**
 * 올해라면 MM월 DD일 (요일) 형식으로 날짜를 포맷팅합니다.
 * 올해가 아니라면 YYYY년 MM월 DD일 (요일) 형식으로 날짜를 포맷팅합니다.
 */
export const formatLocalizedDate = (isoDate: string): string => {
  const date = new Date(isoDate);

  const today = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];

  if (year === today.getFullYear()) {
    return `${month}월 ${day}일 (${dayOfWeek})`;
  }

  return `${year}년 ${month}월 ${day}일 (${dayOfWeek})`;
};

/**
 * 오후/오전 HH시 형식으로 시간을 포맷팅합니다.
 */
export const formatHourTo12HourText = (time: string) => {
  const [hourStr, minuteStr] = time.split(":");
  const hour = Number.parseInt(hourStr, 10);
  const minute = Number.parseInt(minuteStr, 10);

  const period = hour < 12 ? "오전" : "오후";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;

  if (minute === 0) {
    return `${period} ${hour12}시`;
  }

  return `${period} ${hour12}시 ${minute}분`;
};

/**
 * 10이하의 숫자에 0을 붙입니다.
 */
export const formatTime = (time: number): string => {
  return time < 10 ? `0${time}` : `${time}`;
};
