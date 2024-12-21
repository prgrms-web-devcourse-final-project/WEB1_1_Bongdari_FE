import { useEffect, useState } from 'react';
import { personProfileType } from '@/shared/types/person-profile/personProfile';
import { fetchMyProfile } from '@/store/queries/volunteer-mypage/useFetchMyData';

// PMPGTop에 쓰이는 use
interface useMyProfileDataReturn {
  profileData: personProfileType | undefined;
}

export const useMyProfileData = (): useMyProfileDataReturn => {
  const [profileData, setProfileData] = useState<personProfileType>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMyProfile();
      if (data && !profileData) setProfileData(data);
    };
    fetchData();
  }, []);

  return {
    profileData
  };
};
