import { useState } from 'react';
import axiosInstance from '@/api/apis';

const useCenterProfile = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [displayName, setDisplayName] = useState('');

  const handleEditProfile = async (
    centerName: string,
    centerPhone: string,
    centerURL: string,
    centerIntroduction: string,
    preview: File | string | null,
    validURL: boolean,
    validPhone: boolean
  ) => {
    if (isSubmitting) return;

    if (!centerName || !validPhone || !validURL) {
      alert('모든 필드를 올바르게 입력해주세요.');
      return;
    }

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      if (preview) {
        formData.append('file', preview);
      }

      const centerData = {
        name: centerName,
        contact_number: centerPhone,
        introduce: centerIntroduction,
        homepage_link: centerURL,
        account_id: 'admin',
        account_pw: 'password123'
      };

      formData.append('centerData', JSON.stringify(centerData));

      const response = await axiosInstance.put('/api/center/profile/1', formData);
      setDisplayName(centerName);
      alert('프로필이 성공적으로 수정되었습니다.');

      return response;
    } catch (err) {
      console.log('프로필 수정 중 오류가 발생했습니다.', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    displayName,
    handleEditProfile
  };
};

export default useCenterProfile;
