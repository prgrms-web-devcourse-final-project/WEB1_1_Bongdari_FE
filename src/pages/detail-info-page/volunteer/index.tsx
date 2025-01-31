import InputBox from '@/components/inputBox';
import { DetailInfoForm, PageWrapper, SubmitButton, TitleContainer } from '../center/indexCss';
import Select from '@/components/select';

const VolunteerDetailInfoPage = () => {
  const genderOptions = ['남성', '여성'];

  const handleGenderSelect = (selected: string) => {
    console.log('선택된 성별:', selected);
  };

  return (
    <PageWrapper>
      <TitleContainer>
        {/* TODO: 통합하면 loginType에 따라 기관/봉사자로 title 구분하기 */}
        <h1>처음 방문하는 봉사자이신가요?</h1>
        <p>아래 정보를 입력해주세요.</p>
      </TitleContainer>
      <DetailInfoForm onSubmit={() => console.log('봉사자상세정보입력폼제출')}>
        <div>
          <label htmlFor="volunteerName">이름</label>
          <InputBox colortype="white" textType="text" placeholder="이름을 입력해주세요." />
        </div>
        <div>
          <label htmlFor="volunteerPhone">전화번호</label>
          <InputBox colortype="white" textType="text" placeholder="전화번호를 입력해주세요." />
        </div>
        <div>
          <label htmlFor="volunteerNickName">닉네임</label>
          <InputBox colortype="white" textType="url" placeholder="닉네임을 입력해주세요." />
        </div>
        <div>
          <label htmlFor="volunteerGender">성별</label>
          <Select
            text="성별을 선택해주세요."
            data={genderOptions}
            getSelectedOption={handleGenderSelect}
            width="100%"
          />
        </div>
        <SubmitButton label="입력하기" type="blue" />
      </DetailInfoForm>
    </PageWrapper>
  );
};

export default VolunteerDetailInfoPage;
