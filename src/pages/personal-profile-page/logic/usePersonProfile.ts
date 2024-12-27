import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { personProfileType } from '@/shared/types/person-profile/personProfile';
import { usePersonProfileQuery } from '@/store/queries/volunteer-profile/useFetchPersonProfile';

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

  // url에 id 없고 로그인 상태라면 내 프로필 데이터 보여주기
  const { data } = usePersonProfileQuery(userId === undefined && myLoginId ? myLoginId : (userId ?? ''));
  // 수정필요(주영) - 가독성 이슈

  // 로그인 시에만 쪽지 모달 열기
  const setIsModalOpenWhenLogin = (bool: boolean) => {
    if (myLoginId) setIsModalOpen(bool);
  };

  // 프로필 데이터 fetch
  useEffect(() => {
    if (data && !profileData) setProfileData(data.data as personProfileType);
  }, []);

  return { userId, profileData, isModalOpen, setIsModalOpenWhenLogin };
};
