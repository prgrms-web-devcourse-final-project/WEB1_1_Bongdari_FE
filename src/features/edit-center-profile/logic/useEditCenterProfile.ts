import { useImageUpload } from '@/shared/hooks/useImageUpload';
import { useState } from 'react';

const useEditCenterProfile = () => {
  const { preview, handleImageUpload } = useImageUpload();
  const [centerName, setCenterName] = useState<string>('');
  const [centerPhone, setCenterPhone] = useState<string>('');
  const [centerURL, setCenterURL] = useState<string>('');
  const [centerIntroduction, setCenterIntroduction] = useState<string>('');

  const [validURL, setValidURL] = useState<boolean>(true);
  const [validPhone, setValidPhone] = useState<boolean>(true);

  const handleNameChange = (centerName: string) => {
    setCenterName(centerName);
  };

  const handlePhoneChange = (centerPhone: string) => {
    setCenterPhone(centerPhone);

    // 일단 api 형식대로 번호 유효성 검사 추가했습니다!
    // ooo-oooo-oooo, oo-ooo-oooo, oo-oooo-oooo
    const phoneRegex = /^(?:\d{3}-\d{4}-\d{4}|\d{2}-\d{3}-\d{4}|\d{2}-\d{4}-\d{4})$/;
    if (phoneRegex.test(centerPhone)) {
      console.log('형식에 맞는 번호입니다.');
      setValidPhone(true);
    } else {
      console.log('형식에 맞지 않은 번호입니다.');
      setValidPhone(false);
    }
  };

  const handleURLChange = (centerURL: string) => {
    setCenterURL(centerURL);

    // URL 유효성 검사 로직
    try {
      new URL(centerURL);
      setValidURL(true);
      console.log('유효한 URL입니다.');
    } catch (error) {
      setValidURL(false);
      console.log('유효하지 않은 URL입니다.', error);
    }
  };

  const handleIntroductionChange = (centerIntroduction: string) => {
    setCenterIntroduction(centerIntroduction);
  };

  return {
    preview,
    centerName,
    centerPhone,
    centerURL,
    centerIntroduction,
    handleImageUpload,
    handleNameChange,
    handlePhoneChange,
    handleURLChange,
    handleIntroductionChange,
    validURL,
    validPhone
  };
};

export default useEditCenterProfile;
