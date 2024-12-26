import { useNavigate } from 'react-router-dom';

import { AdjustmentButton, ButtonWrapper, EditAidRqButton } from './indexCss';

interface ButtonGroupProps {
  id: string | undefined;
  handleAdjustmentButton: () => void;
  status: string;
}

const ButtonGroup = ({ id, handleAdjustmentButton, status }: ButtonGroupProps) => {
  const navigate = useNavigate();

  return (
    <ButtonWrapper>
      <EditAidRqButton
        onClick={() =>
          navigate('/mypage/adminaidreqmodify', {
            state: { id: id }
          })
        }
        label="수정하기"
        type="white"
      />
      <AdjustmentButton
        label="정산하기"
        type="blue"
        onClick={handleAdjustmentButton}
        disabled={status !== 'COMPLETED'}
      />
    </ButtonWrapper>
  );
};

export default ButtonGroup;
