import { GoodsItemBox, GoodsTitle, Xmark } from './indexCss';

interface GoodsItemProps {
  id: number;
  itemName: string;
  onDelete: (id: number) => void;
}

const GoodsItem: React.FC<GoodsItemProps> = ({ id, itemName, onDelete }) => {
  return (
    <GoodsItemBox>
      <GoodsTitle>{itemName}</GoodsTitle>
      <Xmark className="fa-solid fa-x" onClick={() => onDelete(id)}></Xmark>
    </GoodsItemBox>
  );
};

export default GoodsItem;
