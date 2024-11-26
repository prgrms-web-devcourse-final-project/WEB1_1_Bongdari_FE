import { GoodsItemBox, GoodsTitle, Xmark } from './indexCss';

interface GoodsItemProps {
  centerId: number;
  itemName: string;
  onDelete: (centerId: number) => void;
}

const GoodsItem: React.FC<GoodsItemProps> = ({ centerId, itemName, onDelete }) => {
  return (
    <GoodsItemBox>
      <GoodsTitle>{itemName}</GoodsTitle>
      <Xmark className="fa-solid fa-x" onClick={() => onDelete(centerId)}></Xmark>
    </GoodsItemBox>
  );
};

export default GoodsItem;
