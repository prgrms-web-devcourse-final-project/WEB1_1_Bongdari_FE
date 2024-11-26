import axiosInstance from '@/api/apis';
import { useImageUpload } from '@/shared/hooks/useImageUpload';
import { useEffect, useState } from 'react';
import { validatePhone, validateURL } from './validation';

const useEditCenterProfile = () => {
  const { preview, handleImageUpload } = useImageUpload();
  const [centerName, setCenterName] = useState('');
  const [centerPhone, setCenterPhone] = useState('');
  const [centerURL, setCenterURL] = useState('');
  const [centerIntroduction, setCenterIntroduction] = useState('');

  const [validURL, setValidURL] = useState(true);
  const [validPhone, setValidPhone] = useState(true);

  // 데이터 로딩 함수 분리
  // TODO: React Query로 분리해야 함
  const fetchInitialData = async () => {
    try {
      const response = await axiosInstance.get('/api/center/profile/1');
      const { data } = response;

      setCenterName(data.name);
      setCenterPhone(data.contact_number);
      setCenterURL(data.homepage_link);
      setCenterIntroduction(data.introduce);

      setValidPhone(validatePhone(data.contact_number));
      setValidURL(validateURL(data.homepage_link));

      console.log(data);
    } catch (error) {
      console.error('데이터 로딩 실패:', error);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

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
