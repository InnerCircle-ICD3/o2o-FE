import type { StatusLabelType } from "@/types/statusLabel.type";

interface GenerateProductStatusResult {
  status: StatusLabelType;
  label: string;
}

const generateProductStatus = (length: number): GenerateProductStatusResult => {
  if (length === 0) {
    return { status: "soldOut", label: "마감" };
  }

  const status = length === 1 ? "endSoon" : "sales";
  return { status, label: `${length}개 남음` };
};

export default generateProductStatus;
