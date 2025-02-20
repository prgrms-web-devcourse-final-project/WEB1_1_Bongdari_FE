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

  // preferData가 undefined이거나 null일 때 api 또는 통신 오류로 간주 -> 영역 유지를 위함
  const hasError = !preferData;
  // preferData가 빈 배열일 때는 등록된 필요품이 없는 상태
  const isEmpty = Array.isArray(preferData) && preferData?.length === 0;

  if (hasError) {
    return <SectionBox className="noData">물품 데이터를 불러올 수 없습니다.</SectionBox>;
  }

  const handleAdd = async (itemName: string) => {
    if (!itemName.trim()) {
      openAlert('물품명을 입력해주세요.');
      return;
    }
    if (itemName.trim().length > 15) {
      openAlert('물품명은 15자 이내로 입력해주세요.');
      return;
    }

    addItem(itemName.trim(), {
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
        <ResisterTitle>{name ? name : '이름 없음'}의 필요품 등록</ResisterTitle>
        <Tooltip title={`기관에 필요한 물품을 직접 입력해 등록해보세요 (예: 어린이 동화 10권 or 옷 5벌)`} arrow>
          <Button style={{ paddingLeft: 0 }}>
            <TooltipBorder>
              <i className="fa-solid fa-exclamation"></i>
            </TooltipBorder>
          </Button>
        </Tooltip>
      </RegisterTitleSection>
      <GoodsContainer>
        {isEmpty ? (
          <div className="emptyData">등록된 필요품이 없습니다</div>
        ) : (
          preferData.map((item) => (
            <GoodsItem key={item.id} prefer_item_id={item.id} item_name={item.item_name} onDelete={handleDeleteGoods} />
          ))
        )}
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
