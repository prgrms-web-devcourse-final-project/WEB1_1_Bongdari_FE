import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { GoodsContainer, RegisterTitleSection, ResisterTitle, SectionBox, TooltipBorder } from './indexCss';
import GoodsItem from './_components/goods-item-box';
import RegisterBar from './_components/register-bar';
import { useState } from 'react';

interface GoodsItem {
  id: number;
  itemName: string;
}

const RegisterGoods = () => {
  const [currentInput, setCurrentInput] = useState(''); // 입력된 값
  const [goodsList, setGoodsList] = useState<GoodsItem[]>([]); // 이미 등록된 값 리스트

  const handleAddGoods = () => {
    if (!currentInput.trim()) {
      alert('물품명을 입력해주세요.');
      return;
    }
    if (currentInput.length > 15) {
      alert('물품명은 20자 이내로 입력해주세요.');
      return;
    }

    const newItem: GoodsItem = {
      id: Date.now(), // TODO: 바꿀 예정 (임시) -> 키값을 고유하게 부여하여 테스트하기 위해 만들었습니다.
      itemName: currentInput
    };

    setGoodsList((prev) => [...prev, newItem]);
    setCurrentInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddGoods();
    }
  };

  const handleDeleteGoods = (id: number) => {
    setGoodsList((prev) => prev.filter((item) => item.id !== id));
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
