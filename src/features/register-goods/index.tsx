import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { GoodsContainer, RegisterTitleSection, ResisterTitle, SectionBox, TooltipBorder } from './indexCss';
import GoodsItem from './_components/goods-item-box';
import RegisterBar from './_components/register-bar';
import { useState } from 'react';

interface GoodsItem {
  centerId: number;
  itemName: string;
}

const RegisterGoods = () => {
  const [inputGoods, setInputGoods] = useState(''); // 입력된 값
  const [goodsList, setGoodsList] = useState<GoodsItem[]>([]); // 이미 등록된 값 리스트

  const handleRegisterButton = () => {
    if (!inputGoods.trim()) return;

    const newItem: GoodsItem = {
      centerId: Date.now(), // TODO: 바꿀 예정 (임시) -> 키값을 고유하게 부여하여 테스트하기 위해 만들었습니다.
      itemName: inputGoods
    };

    setGoodsList((prev) => [...prev, newItem]);
    setInputGoods('');
  };

  const handleDeleteGoods = (centerId: number) => {
    setGoodsList((prev) => prev.filter((item) => item.centerId !== centerId));
  };

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
          <GoodsItem
            key={item.centerId}
            centerId={item.centerId}
            itemName={item.itemName}
            onDelete={handleDeleteGoods}
          />
        ))}
      </GoodsContainer>
      <RegisterBar inputGoods={inputGoods} setInputGoods={setInputGoods} handleRegisterButton={handleRegisterButton} />
    </SectionBox>
  );
};

export default RegisterGoods;
