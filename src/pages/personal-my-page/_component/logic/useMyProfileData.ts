import { useEffect, useState } from 'react';
import { fetchMyProfile } from './fetchMyData';
import { personProfileType } from '@/shared/types/person-profile/personProfile';

// PMPGTop에 쓰이는 use
interface useMyProfileDataReturn {
  profileData: personProfileType | undefined;
}

export const useMyProfileData = (): useMyProfileDataReturn => {
  const [profileData, setProfileData] = useState<personProfileType>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMyProfile();
      if (data) setProfileData(data);
      // else
      //   setProfileData({
      //     volunteer_id: '1',
      //     nickname: 'jooyoung',
      //     img_url: '',
      //     introduce:
      //       '나의 소개입니다! 나의 소개입니다! 나의 소개입니다! 나의 소개입니다! 나의 소개입니다! 나의 소개입니다! 나의 소개입니다!',
      //     tier: 'RED',
      //     total_volunteer_hours: 120,
      //     total_volunteer_count: 9,
      //     detail: {
      //       name: '김주영',
      //       email: 'djm06294@naver.com',
      //       gender: 'female',
      //       birthDate: '1999-03-01',
      //       contactNumber: '010-1222-2222'
      //     }
      //   });
    };
    fetchData();
  }, []);

  return {
    profileData
  };
};
