import { useNavigate } from 'react-router-dom';
import {
  ErrorMsg,
  GoToMainButton,
  LogoImg,
  LogoWrapper,
  PageWrapper,
  RequirementMsg
} from '../not-found-page/indexCss';

const LoginErrorPage = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <LogoWrapper>
        <LogoImg src="/assets/imgs/error-page-logo.svg" alt="손모아로고" />
      </LogoWrapper>
      <ErrorMsg>{'정보를\n불러올 수 없습니다.'}</ErrorMsg>
      <RequirementMsg>다시 시도해주세요.</RequirementMsg>
      <GoToMainButton label="메인으로 돌아가기" type="blue" onClick={() => navigate('/')} />
    </PageWrapper>
  );
};

export default LoginErrorPage;
