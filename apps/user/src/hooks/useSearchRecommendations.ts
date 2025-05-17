import { baseUrl } from "@/mocks/utils";
import { useEffect, useRef, useState } from "react";

interface UseSearchRecommendationsResult {
  recommendations: string[];
}

export const useSearchRecommendations = (searchTerm: string): UseSearchRecommendationsResult => {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const latestSearchTermRef = useRef<string>("");
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setRecommendations([]);
      return;
    }

    latestSearchTermRef.current = searchTerm;

    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`${baseUrl}/recommendations?searchTerm=${searchTerm}`, {
          signal: controller.signal,
        });

        const data: string[] = await res.json();

        // 중복 제거
        const uniqueRecommendations = Array.from(new Set(data));

        if (latestSearchTermRef.current === searchTerm) {
          setRecommendations(uniqueRecommendations);
        }
      } catch (err: unknown) {
        if (!(err instanceof DOMException && err.name === "AbortError")) {
          console.error("fetch failed:", err);
          setRecommendations([]);
        }
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return { recommendations };
};
