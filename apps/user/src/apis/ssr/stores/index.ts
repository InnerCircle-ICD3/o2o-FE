import { apiClient } from "@/apis/client";
import type { Product, StoreDetail } from "@/types/apis/store.type";

export const getStoreDetail = async (id: string) => {
  const data = await apiClient.get<StoreDetail>(`stores/${id}`);

  return data;
};

export const getStoreDetailProducts = async (id: string) => {
  const data = await apiClient.get<Product[]>(`stores/${id}/products`);

  return data;
};
