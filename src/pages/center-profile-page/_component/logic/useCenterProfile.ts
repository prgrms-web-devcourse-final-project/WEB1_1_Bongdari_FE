import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';
import { useGetCenterProfile } from '@/store/queries/center-mypage/useCenterProfile';
interface useCenterProfileReturn {
  profileData: centerProfileType | undefined;
}

export const useCenterProfile = (): useCenterProfileReturn => {
  const { center_id } = useParams();
  const [profileData, setProfileData] = useState<centerProfileType>();
  const { data } = useGetCenterProfile(center_id ?? '');

  // 데이터가 성공적으로 불러와졌을 때만 상태를 업데이트합니다.
  useEffect(() => {
    if (data) {
      setProfileData(data);
    }
  }, [data]);

  return {
    profileData
  };
};
