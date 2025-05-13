import { apiClient } from "@/apis/client";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { throttle } from "lodash";

interface InfiniteScrollOptions {
  size: number;
  api: string;
}

interface Store {
  id: number;
  name: string;
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

export const useInfiniteScroll = ({ size, api }: InfiniteScrollOptions) => {
  const [page, setPage] = useState(0);
  const [isFetching, setIsFetching] = useState(true);
  const [hasNextPage, setNextPage] = useState(true);

  const { data, isLoading, error } = useQuery({
    queryKey: ["stores", page],
    queryFn: () =>
      apiClient.get<PaginationResponse<Store>>(
        `${api}?page=${page}&size=${size}`
      ),
    enabled: isFetching,
  });

  useEffect(() => {
    if (data) {
      setPage(data.pageNumber + 1);
      setNextPage(!data.isLastPage);
      setIsFetching(false);
    }
  }, [data]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const { scrollTop, offsetHeight } = document.documentElement;
      if (window.innerHeight + scrollTop >= offsetHeight - 100) {
        if (!isFetching && hasNextPage) {
          setIsFetching(true);
        }
      }
    }, 300); // 300ms 동안 한 번만 실행

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // throttle 취소
    };
  }, [isFetching, hasNextPage]);

  return { page, data, isFetching, hasNextPage, error };
};
