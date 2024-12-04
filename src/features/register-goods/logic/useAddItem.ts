import { usePreferItem } from '@/store/queries/center-mypage/usePreferItems';
import { useState } from 'react';

interface GoodsItem {
  id: number;
  itemName: string;
}

const useHandleItem = () => {
  const [currentInput, setCurrentInput] = useState(''); // 입력된 값
  const [goodsList, setGoodsList] = useState<GoodsItem[]>([]); // 이미 등록된 값 리스트
  const { addItem, isLoading } = usePreferItem();

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

    addItem(newItem.itemName, {
      onSuccess: (response) => {
        console.log('물품등록성공?', response);
        setGoodsList((prev) => [...prev, newItem]);
        setCurrentInput('');
      },
      onError: (error) => {
        console.error('실패', error);
        alert('물품 등록 중 오류가 발생했음');
      }
    });
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
    handleDeleteGoods,
    isLoading
  };
};

export default useHandleItem;
