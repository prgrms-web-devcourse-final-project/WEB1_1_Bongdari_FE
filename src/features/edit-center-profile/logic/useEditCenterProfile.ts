import { useImageUpload } from '@/shared/hooks/useImageUpload';
import { useState, useEffect } from 'react';
import { validatePhone, validateURL } from './validation';
import type { centerProfileType } from '@/shared/types/center-profile/centerProfile';

interface UseEditCenterProfileProps {
  profileData: centerProfileType;
}

const useEditCenterProfile = ({ profileData }: UseEditCenterProfileProps) => {
  const { preview, setPreview, handleImageUpload } = useImageUpload();

  // 수정중인 데이터 모아놓는 상태
  const [centerName, setCenterName] = useState('');
  const [centerPhone, setCenterPhone] = useState('');
  const [centerURL, setCenterURL] = useState('');
  const [centerIntroduction, setCenterIntroduction] = useState('');

  // 원래 데이터 상태
  const [originalName, setOriginalName] = useState('');

  const [validURL, setValidURL] = useState(true);
  const [validPhone, setValidPhone] = useState(true);

  useEffect(() => {
    if (profileData) {
      setCenterName(profileData.name);
      setCenterPhone(profileData.contact_number);
      setCenterURL(profileData.homepage_link);
      setCenterIntroduction(profileData.introduce);

      setOriginalName(profileData.name);

      if (profileData.img_url) {
        setPreview(profileData.img_url);
      }

      setValidPhone(validatePhone(profileData.contact_number));
      setValidURL(validateURL(profileData.homepage_link));
    }
  }, [profileData, setPreview]);

  // 상태 업데이트 핸들러
  const handleNameChange = (name: string) => setCenterName(name);

  const handlePhoneChange = (phone: string) => {
    setCenterPhone(phone);
    setValidPhone(validatePhone(phone));
  };

  const handleURLChange = (url: string) => {
    setCenterURL(url);
    setValidURL(validateURL(url));
  };

  const handleIntroductionChange = (introduction: string) => setCenterIntroduction(introduction);

  return {
    preview,
    centerName,
    originalName,
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
