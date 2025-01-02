import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { GoodsContainer, RegisterTitleSection, ResisterTitle, SectionBox, TooltipBorder } from './indexCss';
import GoodsItem from './_components/goods-item-box';
import RegisterBar from './_components/register-bar';
import useHandleItem from './logic/useAddItem';
import type { centerPreferItemType } from '@/shared/types/center-profile/centerProfile';
import { usePreferItem } from '@/store/queries/center-mypage/usePreferItems';
import { useAlertDialog } from '@/store/stores/dialog/dialogStore';

interface RegisterGoodsProps {
  name: string;
  preferData: centerPreferItemType[];
}

const RegisterGoods = ({ name, preferData }: RegisterGoodsProps) => {
  const { addItem, isLoading } = usePreferItem();
  const { currentInput, setCurrentInput, handleKeyPress, handleDeleteGoods } = useHandleItem();
  const { openAlert } = useAlertDialog();

  const handleAdd = async (itemName: string) => {
    if (!itemName.trim()) {
      openAlert('물품명을 입력해주세요.');
      return;
    }
    if (itemName.length > 15) {
      openAlert('물품명은 15자 이내로 입력해주세요.');
      return;
    }

    addItem(itemName, {
      onSuccess: () => {
        setCurrentInput('');
      },
      onError: (error) => {
        console.error('물품 추가 실패', error);
        openAlert('물품 등록에 실패했습니다.');
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
        {preferData.map((item) => (
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
