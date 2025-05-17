// TODO: 테스트를 위해 임시로 추가한 코드
import { describe, expect, it } from "vitest";
import { capitalize, formatCurrency, formatDate } from ".";

describe("capitalize", () => {
  it("첫 글자를 대문자로 변환합니다", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
  });

  it("빈 문자열이 입력되면 빈 문자열을 반환합니다", () => {
    expect(capitalize("")).toBe("");
  });

  it("이미 첫 글자가 대문자인 경우 변경되지 않습니다", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });
});

describe("formatCurrency", () => {
  it("숫자를 한국 원화 형식으로 포맷팅합니다", () => {
    expect(formatCurrency(1_000)).toBe("1,000₩");
    expect(formatCurrency(1_500_000)).toBe("1,500,000₩");
  });

  it("소수점이 있는 숫자도 올바르게 포맷팅합니다", () => {
    expect(formatCurrency(1_000.5)).toBe("1,001₩");
  });
});

describe("formatDate", () => {
  it("날짜를 YYYY-MM-DD 형식으로 포맷팅합니다", () => {
    const date = new Date(2023, 0, 15); // 2023-01-15
    expect(formatDate(date)).toBe("2023-01-15");
  });

  it("한 자리 숫자인 월과 일을 두 자리로 패딩합니다", () => {
    const date = new Date(2023, 8, 5); // 2023-09-05
    expect(formatDate(date)).toBe("2023-09-05");
  });
});
