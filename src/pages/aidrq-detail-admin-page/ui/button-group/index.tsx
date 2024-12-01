import { OtherButton } from '@/components/button';
import { ButtonWrapper, EmptyButton } from './indexCss';
import { useNavigate } from 'react-router-dom';

const ButtonGroup = () => {
  const navigate = useNavigate();

  return (
    <ButtonWrapper>
      <EmptyButton onClick={() => navigate('/centermypage/adminaidreqmodify')}>수정하기</EmptyButton>
      <OtherButton label="정산하기" width="221px" />
    </ButtonWrapper>
  );
};

export default ButtonGroup;
