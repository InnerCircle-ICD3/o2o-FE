import { useSearchRecommendations } from "@/hooks/useSearchRecommendations";
import { worker } from "@/mocks/server";
import { renderHook, waitFor } from "@testing-library/react";
import { cleanup } from "@testing-library/react";
// src/__test__/hooks/useSearchRecommendations.test.ts
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";

beforeAll(() => worker.listen());
afterEach(() => {
  worker.resetHandlers();
  cleanup();
});
afterAll(() => worker.close());

describe("useSearchRecommendations()", () => {
  it("입력된 검색어에 포함되는 추천어 리스트를 반환한다", async () => {
    const { result } = renderHook(() => useSearchRecommendations("치"));

    await waitFor(() => expect(result.current.recommendations).toContain("피나치공"));
  });

  it("빠르게 검색어가 바뀌었을 경우, 이전 요청의 응답은 무시된다", async () => {
    const { rerender, result } = renderHook(({ q }) => useSearchRecommendations(q), {
      initialProps: { q: "치" },
    });

    rerender({ q: "피" });

    await waitFor(() => expect(result.current.recommendations).toContain("피자스쿨"));

    expect(result.current.recommendations).not.toContain("치킨");
  });

  it("검색어가 공백이면 추천어를 반환하지 않는다", async () => {
    const { result } = renderHook(() => useSearchRecommendations(" "));

    await waitFor(() => expect(result.current.recommendations).toEqual([]));
  });

  it("중복된 추천 검색어를 제거하여 반환한다", async () => {
    const { result } = renderHook(() => useSearchRecommendations("pizza"));

    await waitFor(() => {
      const recommendations = result.current.recommendations;
      const uniqueRecommendations = Array.from(new Set(recommendations));
      expect(recommendations.length).toBe(uniqueRecommendations.length);
      expect(recommendations).toEqual(uniqueRecommendations);
    });
  });
});
