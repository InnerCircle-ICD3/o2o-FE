import { apiClient } from "@/apis/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface OrderBody {
  storeId: number;
  products: {
    productId: number;
    selectedCount: number;
  }[];
}

interface OrderResponse {
  orderId: number;
}

const createOrder = (body: OrderBody) => {
  return apiClient.post<OrderResponse>("orders", body);
};

const usePostOrder = () => {
  const mutation = useMutation({
    mutationFn: createOrder,
  });
  const router = useRouter();

  const submitOrder = (body: OrderBody) => {
    return mutation.mutate(body, {
      onSuccess: (res) => {
        router.push(`/orders/${res.orderId}`);
      },
      onError: (error) => {
        console.error("Order submission failed:", error);
      },
    });
  };

  return submitOrder;
};

export default usePostOrder;
