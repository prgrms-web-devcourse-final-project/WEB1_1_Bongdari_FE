import { useNavigate } from 'react-router-dom';

import { ButtonWrapper, EmptyButton } from './indexCss';
import Button from '@/components/button';

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
      <Button label="정산하기" onClick={handleAdjustmentButton} disabled={status !== 'COMPLETED'} />
    </ButtonWrapper>
  );
};

export default ButtonGroup;
