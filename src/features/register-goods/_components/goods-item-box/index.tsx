import { GoodsItemBox, GoodsTitle, Xmark } from './indexCss';

interface GoodsItemProps {
  prefer_item_id: number;
  item_name: string;
  onDelete: (id: number) => void;
}

const GoodsItem: React.FC<GoodsItemProps> = ({ prefer_item_id, item_name, onDelete }) => {
  return (
    <GoodsItemBox>
      <GoodsTitle>{item_name}</GoodsTitle>
      <Xmark className="fa-solid fa-x" onClick={() => onDelete(prefer_item_id)}></Xmark>
    </GoodsItemBox>
  );
};

export default GoodsItem;
