import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import InputBox from '@/components/inputBox';
import { DetailInfoForm, PageWrapper, SubmitButton, TitleContainer } from '../center/indexCss';
import { DetailInfo, ErrorMessage, LogoutButton, TabButton, TabWrapper } from './indexCss';
import { useAlertDialog } from '@/store/stores/dialog/dialogStore';
import { putVolunteerInfo } from './logic/putVolunteerInfo';

interface FormDataType {
  name: string;
  contact: string;
  nickname: string;
  gender: '남성' | '여성';
  introduce: string;
}

interface FormErrorType {
  contact: string;
}

interface SubmitDataType {
  common_basic_info: {
    name: string;
    contact_number: string;
    img_url: string;
    introduce: string;
  };
  nickname: string;
  gender: 'MALE' | 'FEMALE';
}

const validatePhone = (phone: string) => {
  const phoneRegex =
    /^(?:\d{3}-\d{3}-\d{4}|\d{3}-\d{4}-\d{4}|\d{2}-\d{3}-\d{4}|\d{2}-\d{4}-\d{4}|\d{4}-\d{4}|\d{3}-\d{3}-\d{3}|\d{2}-\d{3}-\d{3})$/;
  return phoneRegex.test(phone);
};

const VolunteerDetailInfoPage = () => {
  const navigate = useNavigate();
  const { openAlert } = useAlertDialog();

  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    contact: '',
    nickname: '',
    gender: '남성',
    introduce: ''
  });

  const [formError, setFormError] = useState<FormErrorType>({
    contact: ''
  });

  const handleSubmit = async () => {
    // 전화번호 유효성 검사
    if (!validatePhone(formData.contact)) {
      setFormError((prev) => ({
        ...prev,
        contact: '올바른 전화번호 형식이 아닙니다.'
      }));
      openAlert('전화번호 형식을 확인해주세요.');
      return;
    }

    const submitData: SubmitDataType = {
      common_basic_info: {
        name: formData.name,
        contact_number: formData.contact,
        img_url: '',
        introduce: formData.introduce
      },
      nickname: formData.nickname,
      gender: formData.gender === '남성' ? 'MALE' : 'FEMALE'
    };

    try {
      await putVolunteerInfo(submitData);
      openAlert('봉사자 정보가 성공적으로 업데이트되었습니다.');
      navigate('/main');
    } catch (error) {
      console.error('봉사자 정보 업데이트 중 오류 발생:', error);
      openAlert('정보 업데이트에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleInputChange = (field: keyof FormDataType, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));

    // 전화번호 입력 시 유효성 검사
    if (field === 'contact') {
      if (value.length > 0 && !validatePhone(value)) {
        setFormError((prev) => ({
          ...prev,
          contact: '올바른 전화번호 형식이 아닙니다.'
        }));
      } else {
        setFormError((prev) => ({
          ...prev,
          contact: ''
        }));
      }
    }
  };

  return (
    <PageWrapper>
      <TitleContainer>
        <h1>처음 방문하는 봉사자이신가요?</h1>
        <p>아래 정보를 입력해주세요.</p>
      </TitleContainer>
      <DetailInfoForm>
        <div>
          <label htmlFor="volunteerName">이름</label>
          <InputBox
            colortype="white"
            textType="text"
            placeholder="이름을 입력해주세요."
            getInputText={(value: string) => handleInputChange('name', value)}
          />
        </div>
        <div>
          <label htmlFor="volunteerPhone">전화번호</label>
          <InputBox
            colortype="white"
            textType="text"
            placeholder="전화번호를 입력해주세요. (예: 010-1234-5678)"
            getInputText={(value: string) => handleInputChange('contact', value)}
          />
          {formData.contact && !validatePhone(formData.contact) && (
            <ErrorMessage>
              {formError.contact} 연락처는 "oo-ooo(o)-oooo" 또는 "ooo-ooo(o)-oooo" 형식으로 입력해주세요.
            </ErrorMessage>
          )}
        </div>
        <div>
          <label htmlFor="volunteerNickName">닉네임</label>
          <InputBox
            colortype="white"
            textType="text"
            placeholder="닉네임을 입력해주세요."
            getInputText={(value: string) => handleInputChange('nickname', value)}
          />
        </div>
        <div>
          <label htmlFor="volunteerGender">성별</label>
          <TabWrapper>
            <TabButton
              label="남성"
              type="white"
              isActive={formData.gender === '남성'}
              onClick={() => handleInputChange('gender', '남성')}
            />
            <TabButton
              label="여성"
              type="white"
              isActive={formData.gender === '여성'}
              onClick={() => handleInputChange('gender', '여성')}
            />
          </TabWrapper>
        </div>
        <div>
          <label htmlFor="volunteerIntroduce">상세정보</label>
          <DetailInfo
            placeholder="간단한 소개를 작성해주세요"
            colortype="white"
            getInputText={(value: string) => handleInputChange('introduce', value)}
          />
        </div>
        <SubmitButton label="입력하기" type="blue" onClick={handleSubmit} />
        <LogoutButton
          label="건너뛰기"
          type="white"
          onClick={() => {
            navigate('/main');
          }}
        />
      </DetailInfoForm>
    </PageWrapper>
  );
};

export default VolunteerDetailInfoPage;
