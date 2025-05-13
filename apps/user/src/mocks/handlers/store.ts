import { http, HttpResponse } from "msw";

interface Store {
  id: number;
  name: string;
  // 필요한 다른 스토어 정보들 추가
}

interface PaginationResponse<T> {
  contents: T[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  isLastPage: boolean;
  isFirstPage: boolean;
}

// Mock 데이터 생성
const stores = Array.from(Array(1024).keys()).map(
  (id): Store => ({
    id,
    name: `Store ${id}`,
    // 필요한 다른 스토어 정보들 추가
  })
);

export const storeHandlers = [
  http.get("/api/stores", async ({ request }) => {
    const url = new URL(request.url);
    const size = Number(url.searchParams.get("size")) || 10;
    const page = Number(url.searchParams.get("page")) || 0;

    const totalCount = stores.length;
    const totalPages = Math.ceil(totalCount / size);

    // 500ms 지연 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 500));

    return HttpResponse.json<PaginationResponse<Store>>({
      contents: stores.slice(page * size, (page + 1) * size),
      pageNumber: page,
      pageSize: size,
      totalPages,
      totalCount,
      isLastPage: totalPages <= page + 1,
      isFirstPage: page === 0,
    });
  }),
];
