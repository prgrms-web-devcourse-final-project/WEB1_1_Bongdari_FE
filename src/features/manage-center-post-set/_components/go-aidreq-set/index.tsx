import { useNavigate } from 'react-router-dom';
import { GoToButton, Title, Wrapper } from './indexCss';

const GoAidReqSet = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <img src="/public/assets/imgs/aidreq-icon.svg" alt="도움요청글아이콘" />
      <Title>도움요청글 관리 페이지</Title>
      <GoToButton onClick={() => navigate(`/centermypage/adminaidreqlist`)}>바로가기</GoToButton>
    </Wrapper>
  );
};

export default GoAidReqSet;
