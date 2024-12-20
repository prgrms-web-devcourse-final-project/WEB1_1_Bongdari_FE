import { useNavigate } from 'react-router-dom';

import { OtherButton } from '@/components/button';
import { ButtonWrapper, EmptyButton } from './indexCss';

interface ButtonGroupProps {
  id: string | undefined;
  handleAdjustmentButton: () => void;
  status: string;
}

const ButtonGroup = ({ id, handleAdjustmentButton, status }: ButtonGroupProps) => {
  const navigate = useNavigate();

  return (
    <ButtonWrapper>
      <EmptyButton
        onClick={() =>
          navigate('/mypage/adminaidreqmodify', {
            state: { id: id }
          })
        }>
        수정하기
      </EmptyButton>
      <OtherButton label="정산하기" width="221px" onClick={handleAdjustmentButton} disabled={status !== 'COMPLETED'} />
    </ButtonWrapper>
  );
};

export default ButtonGroup;
