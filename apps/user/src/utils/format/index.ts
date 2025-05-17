// TODO: 테스트를 위해 임시로 추가한 코드
/**
 * 첫 글자를 대문자로 변환합니다.
 */
export function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 숫자를 통화 형식으로 포맷팅합니다.
 */
export function formatCurrency(amount: number): string {
  return `${Math.round(amount).toLocaleString("ko-KR")}₩`;
}

/**
 * YYYY-MM-DD 형식으로 날짜를 포맷팅합니다.
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
