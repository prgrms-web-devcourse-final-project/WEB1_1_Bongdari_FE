import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';
import { fetchCenterProfile } from './fetchCenterData';

interface useCenterProfileReturn {
  profileData: centerProfileType | undefined;
}

export const useCenterProfile = (): useCenterProfileReturn => {
  const { center_id } = useParams();
  const [profileData, setProfileData] = useState<centerProfileType>();

  useEffect(() => {
    const fetchData = async () => {
      // url에 center_id가 있을 떄만 데이터 fetch
      if (center_id) {
        const data = await fetchCenterProfile(center_id);
        if (data && !profileData) setProfileData(data.data);
      }
    };
    fetchData();
  }, []);

  return {
    profileData
  };
};
