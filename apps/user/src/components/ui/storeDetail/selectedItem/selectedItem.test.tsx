import type { SelectedProduct } from "@/types/apis/store.type";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import SelectedItem from ".";

describe("SelectedItem Test", () => {
  afterEach(() => {
    cleanup();
  });

  const product: SelectedProduct = {
    id: 1,
    name: "테스트 상품",
    selectedCount: 2,
    quantity: 5,
    price: {
      originalPrice: 10000,
      discountRate: 10,
      finalPrice: 9000,
    },
  };

  it("삭제 버튼 클릭 시 onDelete 호출", () => {
    const mockDelete = vi.fn();

    render(<SelectedItem product={product} onDelete={mockDelete} onUpdateCount={() => {}} />);

    const deleteButton = screen.getByRole("button", { name: "삭제" });
    fireEvent.click(deleteButton);

    expect(mockDelete).toHaveBeenCalledWith(product.id);
  });

  it("증가 버튼 클릭 시 onUpdateCount 호출", () => {
    const mockUpdate = vi.fn();

    render(<SelectedItem product={product} onDelete={() => {}} onUpdateCount={mockUpdate} />);

    const button = screen.getByRole("button", { name: "상품 수량 증가" });

    fireEvent.click(button);
    expect(mockUpdate).toHaveBeenCalledWith(product.id, 1);
  });

  it("감소 버튼 클릭 시 onUpdateCount 호출", () => {
    const mockUpdate = vi.fn();

    render(<SelectedItem product={product} onDelete={() => {}} onUpdateCount={mockUpdate} />);

    const button = screen.getByRole("button", {
      name: "상품 수량 감소",
    });

    fireEvent.click(button);
    expect(mockUpdate).toHaveBeenCalledWith(product.id, -1);
  });

  it("가격이 포맷되어 렌더링 되는지 확인", () => {
    render(<SelectedItem product={product} onDelete={() => {}} onUpdateCount={() => {}} />);

    const expectedPrice = "18,000₩";
    expect(screen.getByText(expectedPrice)).not.toBeNull();
  });
});
