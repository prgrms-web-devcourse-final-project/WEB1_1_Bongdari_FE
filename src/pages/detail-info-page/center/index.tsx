import { useNavigate } from 'react-router';
import { useState } from 'react';

import InputBox from '@/components/inputBox';
import { DetailInfo, DetailInfoForm, LogoutButton, PageWrapper, SubmitButton, TitleContainer } from './indexCss';
import { useAlertDialog } from '@/store/stores/dialog/dialogStore';
import { putCenterInfo } from './logic/putCenterInfo';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { commonLogout } from '@/store/queries/logout-query/useCommonLogout';

interface FormDataType {
  name: string;
  contact: string;
  homepage_url: string;
  introduce: string;
}

interface SubmitDataType {
  common_basic_info: {
    name: string;
    contact_number: string;
    img_url: string;
    introduce: string;
  };
  homepage_url: string;
}

const CenterDetailInfoPage = () => {
  const navigate = useNavigate();
  const { openAlert } = useAlertDialog();
  const clearLoginInfo = useLoginStore((state) => state.clearLoginInfo);

  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    contact: '',
    homepage_url: '',
    introduce: ''
  });

  const handleSubmit = async () => {
    const submitData: SubmitDataType = {
      common_basic_info: {
        name: formData.name,
        contact_number: formData.contact,
        img_url: '',
        introduce: formData.introduce
      },
      homepage_url: formData.homepage_url
    };

    try {
      await putCenterInfo(submitData);
      openAlert('센터 정보가 성공적으로 업데이트되었습니다.');
      navigate('/main');
    } catch (error) {
      console.error('센터 정보 업데이트 중 오류 발생:', error);
      openAlert('정보 업데이트에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleInputChange = (field: keyof FormDataType, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <PageWrapper>
      <TitleContainer>
        {/* TODO: 통합하면 loginType에 따라 기관/봉사자로 title 구분하기 */}
        <h1>처음 방문하는 기관이신가요?</h1>
        <p>아래 정보를 입력해주세요.</p>
      </TitleContainer>
      <DetailInfoForm>
        <div>
          <label htmlFor="centerName">기관명</label>
          <InputBox
            colortype="white"
            textType="text"
            placeholder="기관명을 입력해주세요."
            getInputText={(value: string) => handleInputChange('name', value)}
          />
        </div>
        <div>
          <label htmlFor="centerPhone">전화번호</label>
          <InputBox
            colortype="white"
            textType="text"
            placeholder="전화번호를 입력해주세요."
            getInputText={(value: string) => handleInputChange('contact', value)}
          />
        </div>
        <div>
          <label htmlFor="centerSiteAddress">사이트주소</label>
          <InputBox
            colortype="white"
            textType="url"
            placeholder="사이트 주소를 입력해주세요."
            getInputText={(value: string) => handleInputChange('homepage_url', value)}
          />
        </div>
        <div>
          <label htmlFor="centerSiteAddress">상세정보</label>
          <DetailInfo
            placeholder="간단한 소개를 작성해주세요"
            colortype="white"
            getInputText={(value: string) => handleInputChange('introduce', value)}
          />
        </div>
        <SubmitButton label="입력하기" type="blue" onClick={handleSubmit} />
        <LogoutButton
          label="로그아웃"
          type="white"
          onClick={async () => {
            try {
              await commonLogout();
              clearLoginInfo();
              window.location.href = '/main';
            } catch (error) {
              console.error('로그아웃 실패:', error);
            }
          }}
        />
      </DetailInfoForm>
    </PageWrapper>
  );
};

export default CenterDetailInfoPage;
