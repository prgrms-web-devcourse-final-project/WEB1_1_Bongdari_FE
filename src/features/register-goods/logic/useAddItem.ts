import { useDeletePreferItem } from '@/store/queries/center-mypage/usePreferItems';
import { useState } from 'react';

const useHandleItem = () => {
  const [currentInput, setCurrentInput] = useState('');
  const { mutate: deleteItem } = useDeletePreferItem();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, handleAdd: (input: string) => void) => {
    if (e.key === 'Enter') {
      handleAdd(currentInput);
    }
  };

  const handleDeleteGoods = (itemId: number) => {
    deleteItem(itemId);
  };

  return {
    currentInput,
    setCurrentInput,
    handleKeyPress,
    handleDeleteGoods
  };
};
export default useHandleItem;
