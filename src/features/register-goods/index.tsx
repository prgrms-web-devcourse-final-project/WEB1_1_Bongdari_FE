import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { GoodsContainer, RegisterTitleSection, ResisterTitle, SectionBox, TooltipBorder } from './indexCss';
import GoodsItem from './_components/goods-item-box';
import RegisterBar from './_components/register-bar';
import useHandleItem from './logic/useAddItem';

const RegisterGoods = () => {
  const { goodsList, currentInput, setCurrentInput, handleAddGoods, handleKeyPress, handleDeleteGoods } =
    useHandleItem();

  return (
    <SectionBox>
      <RegisterTitleSection>
        <ResisterTitle>필요품 등록</ResisterTitle>
        <Tooltip title={`기관에 필요한 물품을 직접 입력해 등록해보세요(예: 어린이 동화 10권)`} arrow>
          <Button style={{ paddingLeft: 0 }}>
            <TooltipBorder>
              <i className="fa-solid fa-exclamation"></i>
            </TooltipBorder>
          </Button>
        </Tooltip>
      </RegisterTitleSection>
      <GoodsContainer>
        {goodsList.map((item) => (
          <GoodsItem key={item.id} id={item.id} itemName={item.itemName} onDelete={handleDeleteGoods} />
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
