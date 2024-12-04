import { useImageUpload } from '@/shared/hooks/useImageUpload';
import { useState, useEffect } from 'react';
import { validatePhone, validateURL } from './validation';
import { useGetCenterProfile } from '@/store/queries/center-mypage/useCenterProfile';

const useEditCenterProfile = () => {
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

  const centerId = 'B84733D0-AE17-11EF-AA15-0A855994FB4B';
  const { data, isLoading, error } = useGetCenterProfile(centerId);

  useEffect(() => {
    if (data) {
      setCenterName(data.name);
      setCenterPhone(data.contact_number);
      setCenterURL(data.homepage_link);
      setCenterIntroduction(data.introduce);

      setOriginalName(data.name);

      if (data.img_url) {
        setPreview(data.img_url);
      }

      setValidPhone(validatePhone(data.contact_number));
      setValidURL(validateURL(data.homepage_link));
    }
  }, [data, setPreview]);

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
    validPhone,
    isLoading,
    error
  };
};

export default useEditCenterProfile;
