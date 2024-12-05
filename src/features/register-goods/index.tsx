import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { GoodsContainer, RegisterTitleSection, ResisterTitle, SectionBox, TooltipBorder } from './indexCss';
import GoodsItem from './_components/goods-item-box';
import RegisterBar from './_components/register-bar';
import useHandleItem from './logic/useAddItem';
import type { centerPreferItemType } from '@/shared/types/center-profile/centerProfile';

interface RegisterGoodsProps {
  preferData: centerPreferItemType[];
}

const RegisterGoods = ({ preferData }: RegisterGoodsProps) => {
  const { goodsList, currentInput, setCurrentInput, handleAddGoods, handleKeyPress, handleDeleteGoods } =
    useHandleItem(preferData);

  return (
    <SectionBox>
      <RegisterTitleSection>
        <ResisterTitle>기관 선호물품 등록</ResisterTitle>
        <Tooltip title={`기관에 필요한 물품을 직접 입력해 등록해보세요 (예: 어린이 동화 10권 or 옷 5벌)`} arrow>
          <Button style={{ paddingLeft: 0 }}>
            <TooltipBorder>
              <i className="fa-solid fa-exclamation"></i>
            </TooltipBorder>
          </Button>
        </Tooltip>
      </RegisterTitleSection>
      <GoodsContainer>
        {goodsList.map((item) => (
          <GoodsItem key={item.id} prefer_item_id={item.id} item_name={item.itemName} onDelete={handleDeleteGoods} />
        ))}
      </GoodsContainer>
      <RegisterBar
        currentInput={currentInput}
        setCurrentInput={setCurrentInput}
        handleAddGoods={handleAddGoods}
        handleKeyPress={handleKeyPress}
      />
    </SectionBox>
  );
};

export default RegisterGoods;
