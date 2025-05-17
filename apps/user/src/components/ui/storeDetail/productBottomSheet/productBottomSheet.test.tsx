import type { Product } from "@/types/apis/store.type";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ProductBottomSheet from ".";
const mockSubmit = vi.fn();

vi.mock("@/hooks/api/usePostOrder", () => ({
  __esModule: true,
  default: () => mockSubmit,
}));

const mockProducts: Product[] = [
  {
    id: 1,
    name: "샌드위치",
    imageUrl: "",
    description: "맛있음",
    foodType: ["샌드위치"],
    inventory: { quantity: 5, stock: 5 },
    price: {
      originalPrice: 5000,
      discountRate: 0,
      finalPrice: 5000,
    },
    size: "S",
    status: "OPEN",
    storeId: 101,
    createdAt: "",
  },
];

afterEach(() => {
  cleanup();
});

describe("ProductBottomSheet Test", () => {
  it("초기 렌더링 시 버튼과 선택 컴포넌트가 표시됨", () => {
    render(
      <>
        <div id={"bottom-sheet"} />
        <ProductBottomSheet isShow={true} storeProducts={mockProducts} onClose={vi.fn()} />
      </>,
    );

    expect(screen.getByText("럭키백 선택하기")).not.toBeNull();
    expect(screen.getByRole("button", { name: "주문하기" })).not.toBeNull();
  });

  it("주문하기 버튼 클릭 시 usePostOrder가 호출됨", () => {
    render(
      <>
        <div id="bottom-sheet" />
        <ProductBottomSheet isShow={true} storeProducts={mockProducts} onClose={vi.fn()} />
      </>,
    );

    fireEvent.click(screen.getByRole("button", { name: "럭키백 선택" }));
    fireEvent.click(screen.getByText("샌드위치"));

    const orderButton = screen.getByRole("button", { name: "주문하기" });
    fireEvent.click(orderButton);

    expect(mockSubmit).toHaveBeenCalledWith({
      storeId: 101,
      products: [{ productId: 1, selectedCount: 1 }],
    });
  });
});
