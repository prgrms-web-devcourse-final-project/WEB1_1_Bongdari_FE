import InputBox from '@/components/inputBox';
import { DetailInfoForm, PageWrapper, SubmitButton, TitleContainer } from './indexCss';

const CenterDetailInfoPage = () => {
  return (
    <PageWrapper>
      <TitleContainer>
        {/* TODO: 통합하면 loginType에 따라 기관/봉사자로 title 구분하기 */}
        <h1>처음 방문하는 기관이신가요?</h1>
        <p>아래 정보를 입력해주세요.</p>
      </TitleContainer>
      <DetailInfoForm onSubmit={() => console.log('기관상세정보입력폼제출')}>
        <div>
          <label htmlFor="centerName">기관명</label>
          <InputBox colortype="white" textType="text" placeholder="기관명을 입력해주세요." />
        </div>
        <div>
          <label htmlFor="centerPhone">전화번호</label>
          <InputBox colortype="white" textType="text" placeholder="전화번호를 입력해주세요." />
        </div>
        <div>
          <label htmlFor="centerSiteAddress">사이트주소</label>
          <InputBox colortype="white" textType="url" placeholder="사이트 주소를 입력해주세요." />
        </div>

        <SubmitButton label="입력하기" type="blue" />
      </DetailInfoForm>
    </PageWrapper>
  );
};

export default CenterDetailInfoPage;
