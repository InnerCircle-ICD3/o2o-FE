import BottomSheet from "@/components/common/bottomSheet";
import Button from "@/components/common/button";
import Select from "../select";
import SelectedItem from "../selectedItem";
import TotalPrice from "../totalPrice";
import * as style from "./productBottomSheet.css";

interface ProductBottomSheetProps {
  isShow: boolean;
  onClose: () => void;
}

const ProductBottomSheet = (props: ProductBottomSheetProps) => {
  const { isShow, onClose } = props;

  return (
    <BottomSheet type={"shadow"} isShow={isShow} title={"럭키백 선택하기"} onClose={onClose}>
      <div className={style.container}>
        <Select />
        <SelectedItem />
        <TotalPrice />

        <Button status={"primary"} type={"button"}>
          주문하기
        </Button>
      </div>
    </BottomSheet>
  );
};

export default ProductBottomSheet;
