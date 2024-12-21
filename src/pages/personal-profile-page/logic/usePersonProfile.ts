import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { personProfileType } from '@/shared/types/person-profile/personProfile';
import { fetchPersonProfile } from '@/store/queries/volunteer-profile/useFetchPersonProfile';

interface usePersonProfileReturn {
  userId: string | undefined;
  profileData: personProfileType | undefined;
  isModalOpen: boolean;
  setIsModalOpenWhenLogin: (bool: boolean) => void;
}

export const usePersonProfile = (): usePersonProfileReturn => {
  const { userId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [profileData, setProfileData] = useState<personProfileType>();
  const myLoginId = useLoginStore((state) => state.myLoginId);

  // 로그인 시에만 쪽지 모달 열기
  const setIsModalOpenWhenLogin = (bool: boolean) => {
    if (myLoginId) setIsModalOpen(bool);
  };

  // 프로필 데이터 fetch
  useEffect(() => {
    const fetchData = async () => {
      // url에 id 없고 로그인 상태라면 내 프로필 데이터 보여주기
      if (userId === undefined && myLoginId) {
        const data = await fetchPersonProfile(myLoginId);

        if (data && !profileData) setProfileData(data.data as personProfileType);
      } else if (userId) {
        const data = await fetchPersonProfile(userId);

        if (data && !profileData) setProfileData(data.data as personProfileType);
      }
    };
    fetchData();
  }, []);

  return { userId, profileData, isModalOpen, setIsModalOpenWhenLogin };
};
