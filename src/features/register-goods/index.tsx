import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { GoodsContainer, RegisterTitleSection, ResisterTitle, SectionBox, TooltipBorder } from './indexCss';
import GoodsItem from './_components/goods-item-box';
import RegisterBar from './_components/register-bar';
import useHandleItem from './logic/useAddItem';
import type { centerPreferItemType } from '@/shared/types/center-profile/centerProfile';
import { usePreferItem } from '@/store/queries/center-mypage/usePreferItems';
import { useQuery } from '@tanstack/react-query';

interface RegisterGoodsProps {
  name: string;
  preferData: centerPreferItemType[];
}

const RegisterGoods = ({ name, preferData }: RegisterGoodsProps) => {
  const { addItem, isLoading } = usePreferItem();
  const { data: preferItems } = useQuery({
    queryKey: ['preferItems'],
    initialData: preferData,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false
    // refetchOnMount: true
  });

  const { goodsList, currentInput, setCurrentInput, handleKeyPress, handleDeleteGoods, addGoodsToList } =
    useHandleItem(preferItems);

  const handleAdd = async (itemName: string) => {
    if (!itemName.trim()) {
      alert('물품명을 입력해주세요.');
      return;
    }
    if (itemName.length > 15) {
      alert('물품명은 15자 이내로 입력해주세요.');
      return;
    }

    addItem(itemName, {
      onSuccess: (response) => {
        // 새 아이템을 로컬 상태에 추가 -> 즉시 ui에 반영하기 위해
        const newItem: centerPreferItemType = {
          id: response.id,
          centerId: response.centerId,
          itemName: response.itemName
        };
        addGoodsToList(newItem);
        setCurrentInput('');
      },
      onError: (error) => {
        console.error('물품 추가 실패', error);
        alert('물품 등록에 실패했습니다.');
      }
    });
  };

  return (
    <SectionBox>
      <RegisterTitleSection>
        <ResisterTitle>{name}의 선호물품 등록</ResisterTitle>
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
        handleAddGoods={handleAdd}
        handleKeyPress={(e) => handleKeyPress(e, handleAdd)}
        disabled={isLoading}
      />
    </SectionBox>
  );
};

export default RegisterGoods;
