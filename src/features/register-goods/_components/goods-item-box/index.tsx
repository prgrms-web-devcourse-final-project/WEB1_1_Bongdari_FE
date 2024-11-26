import { GoodsItemBox, GoodsTitle, Xmark } from './indexCss';

const GoodsItem = () => {
  return (
    <GoodsItemBox>
      <GoodsTitle>어린이 동화 10권</GoodsTitle>
      <Xmark className="fa-solid fa-x"></Xmark>
    </GoodsItemBox>
  );
};

export default GoodsItem;
