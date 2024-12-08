import type { centerPreferItemType } from '@/shared/types/center-profile/centerProfile';
import { useState } from 'react';

const useHandleItem = (preferData: centerPreferItemType[]) => {
  const [currentInput, setCurrentInput] = useState(''); // 입력된 값
  const [goodsList, setGoodsList] = useState<centerPreferItemType[]>(preferData); // 이미 등록된 값 리스트

  // 로컬 상태 업데이트 함수
  const addGoodsToList = (newItem: centerPreferItemType) => {
    setGoodsList((prev) => [...prev, newItem]);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, handleAdd: (input: string) => void) => {
    if (e.key === 'Enter') {
      handleAdd(currentInput);
    }
  };

  const handleDeleteGoods = (id: number) => {
    setGoodsList((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    goodsList,
    setGoodsList,
    currentInput,
    setCurrentInput,
    handleKeyPress,
    handleDeleteGoods,
    addGoodsToList
  };
};

export default useHandleItem;
