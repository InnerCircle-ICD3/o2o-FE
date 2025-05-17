import BottomSheet from "@/components/common/bottomSheet";
import Button from "@/components/common/button";
import usePostOrder from "@/hooks/api/usePostOrder";
import type { Product, SelectedProduct } from "@/types/apis/store.type";
import { useState } from "react";
import Select from "../select";
import SelectedItem from "../selectedItem";
import TotalPrice from "../totalPrice";
import * as style from "./productBottomSheet.css";

interface ProductBottomSheetProps {
  isShow: boolean;
  storeProducts: Product[];
  onClose: () => void;
}

const ProductBottomSheet = (props: ProductBottomSheetProps) => {
  const { isShow, storeProducts, onClose } = props;
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);
  const submitOrder = usePostOrder();

  const handleSubmit = () => {
    const orderBody = {
      storeId: storeProducts[0].storeId,
      products: selectedProducts.map((product) => ({
        productId: product.id,
        selectedCount: product.selectedCount,
      })),
    };

    submitOrder(orderBody);
  };

  const result = selectedProducts.reduce(
    (acc, product) => ({
      count: acc.count + product.selectedCount,
      originalPrice: acc.originalPrice + product.price.originalPrice * product.selectedCount,
      finalPrice: acc.finalPrice + product.price.finalPrice * product.selectedCount,
    }),
    {
      count: 0,
      originalPrice: 0,
      finalPrice: 0,
    },
  );

  const handleSelectProduct = (product: Product) => {
    setSelectedProducts((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (!existing) {
        const newProduct: SelectedProduct = {
          id: product.id,
          name: product.name,
          price: product.price,
          selectedCount: 1,
          quantity: product.inventory.quantity,
        };

        return [...prev, newProduct];
      }

      const nextCount = existing.selectedCount + 1;
      const cappedCount = Math.min(nextCount, product.inventory.quantity);

      return prev.map((item) =>
        item.id === product.id ? { ...item, selectedCount: cappedCount } : item,
      );
    });
  };

  const handleDeleteProduct = (productId: number) => {
    setSelectedProducts((prev) => prev.filter((product) => product.id !== productId));
  };

  const updateProductCount = (productId: number, delta: number) => {
    setSelectedProducts((prev) =>
      prev.map((product) => {
        if (product.id !== productId) return product;

        const updatedCount = product.selectedCount + delta;

        return {
          ...product,
          selectedCount: Math.min(Math.max(updatedCount, 1), product.quantity),
        };
      }),
    );
  };

  return (
    <BottomSheet type={"shadow"} isShow={isShow} title={"럭키백 선택하기"} onClose={onClose}>
      <div className={style.container}>
        <Select
          storeProducts={storeProducts}
          selectedProducts={selectedProducts}
          onChange={handleSelectProduct}
        />
        {selectedProducts.map((product) => (
          <SelectedItem
            key={product.id}
            product={product}
            onDelete={handleDeleteProduct}
            onUpdateCount={updateProductCount}
          />
        ))}
        <TotalPrice result={result} />

        <Button
          status={selectedProducts.length !== 0 ? "primary" : "disabled"}
          type={"button"}
          onClick={handleSubmit}
        >
          주문하기
        </Button>
      </div>
    </BottomSheet>
  );
};

export default ProductBottomSheet;
