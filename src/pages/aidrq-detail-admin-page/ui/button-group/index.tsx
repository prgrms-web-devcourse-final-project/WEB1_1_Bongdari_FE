import { useNavigate } from 'react-router-dom';

import { OtherButton } from '@/components/button';
import { ButtonWrapper, EmptyButton } from './indexCss';

interface ButtonGroupProps {
  handleAdjustmentButton: () => void;
}

const ButtonGroup = ({ handleAdjustmentButton }: ButtonGroupProps) => {
  const navigate = useNavigate();

  return (
    <ButtonWrapper>
      <EmptyButton onClick={() => navigate('/centermypage/adminaidreqmodify')}>수정하기</EmptyButton>
      <OtherButton label="정산하기" width="221px" onClick={handleAdjustmentButton} />
    </ButtonWrapper>
  );
};

export default ButtonGroup;
