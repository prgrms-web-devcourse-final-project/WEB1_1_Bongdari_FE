import type { centerPreferItemType } from '@/shared/types/center-profile/centerProfile';
import { useState } from 'react';

const useHandleItem = (preferData: centerPreferItemType[]) => {
  const [currentInput, setCurrentInput] = useState(''); // 입력된 값
  const [goodsList, setGoodsList] = useState<centerPreferItemType[]>(preferData); // 이미 등록된 값 리스트

  const handleAddGoods = () => {
    if (!currentInput.trim()) {
      alert('물품명을 입력해주세요.');
      return;
    }
    if (currentInput.length > 15) {
      alert('물품명은 20자 이내로 입력해주세요.');
      return;
    }

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

  return {
    goodsList,
    currentInput,
    setCurrentInput,
    handleAddGoods,
    handleKeyPress,
    handleDeleteGoods
  };
};

export default useHandleItem;
