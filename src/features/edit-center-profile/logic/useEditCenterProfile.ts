import { useImageUpload } from '@/shared/hooks/useImageUpload';
import { useState, useEffect } from 'react';
import { validatePhone, validateURL } from './validation';

interface UseEditCenterProfileProps {
  data: {
    name: string;
    contact_number: string;
    homepage_link: string;
    introduce: string;
  };
  // img_file?: File;
}

const useEditCenterProfile = ({ data }: UseEditCenterProfileProps) => {
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
    if (data) {
      setCenterName(data.name);
      setCenterPhone(data.contact_number);
      setCenterURL(data.homepage_link);
      setCenterIntroduction(data.introduce);

      setOriginalName(data.name);

      if (preview) {
        setPreview(preview);
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
    validPhone
  };
};

export default useEditCenterProfile;
