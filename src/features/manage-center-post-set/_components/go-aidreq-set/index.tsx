import { useNavigate } from 'react-router-dom';
import { GoToButton, Title, Wrapper } from './indexCss';

const GoAidReqSet = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <img src="/assets/imgs/aidreq-icon.svg" alt="도움요청글아이콘" />
      <Title>도움요청글 관리 페이지</Title>
      <GoToButton onClick={() => navigate(`/mypage/adminaidreqlist`)} label="바로가기" type="white" />
    </Wrapper>
  );
};

export default GoAidReqSet;
