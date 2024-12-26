import { useEffect, useState } from 'react';
import { personProfileType } from '@/shared/types/person-profile/personProfile';
import { useMyProfile } from '@/store/queries/volunteer-mypage/useFetchMyData';

// PMPGTop에 쓰이는 use
interface useMyProfileDataReturn {
  profileData: personProfileType | undefined;
}

export const useMyProfileData = (): useMyProfileDataReturn => {
  const [profileData, setProfileData] = useState<personProfileType>();
  const { data } = useMyProfile();

  useEffect(() => {
    if (data) setProfileData(data);
  }, []);

  return {
    profileData
  };
};
