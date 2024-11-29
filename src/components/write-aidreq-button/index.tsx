import { useNavigate } from 'react-router-dom';
import { IconBox, IntroBox, IntroSubTitle, IntroTitle, SectionBox, WritingButton } from './indexCss';

const WriteAidReqButtonComponent = () => {
  const navigate = useNavigate();
  return (
    <SectionBox>
      <IconBox>
        <img src="/public/assets/imgs/find-volunteer-icon.svg" alt="recruit-volunteer-icon" />
      </IconBox>
      <IntroBox>
        <IntroTitle>봉사활동 지원자를 찾고 있으신가요?</IntroTitle>
        <IntroSubTitle>새로운 지원자 모집글을 작성해보세요.</IntroSubTitle>
      </IntroBox>
      <WritingButton onClick={() => navigate(`/centermypage/adminaidreqcreate`)}>작성하기</WritingButton>
    </SectionBox>
  );
};

export default WriteAidReqButtonComponent;
