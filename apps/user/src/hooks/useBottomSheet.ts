import { useState } from "react";

export const useBottomSheet = () => {
  const [showBottomSheet, setShowBottomSheet] = useState<Set<string>>(new Set());

  const handleShowBottomSheet = (bottomSheetKey: string) => {
    const newSet = new Set(showBottomSheet);
    newSet.add(bottomSheetKey);
    setShowBottomSheet(newSet);
  };

  const handleCloseBottomSheet = (bottomSheetKey: string) => {
    const newSet = new Set(showBottomSheet);
    newSet.delete(bottomSheetKey);
    setShowBottomSheet(newSet);
  };

  return {
    showBottomSheet,
    handleShowBottomSheet,
    handleCloseBottomSheet,
  };
};
