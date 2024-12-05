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
        if (data) setProfileData(data.data);
        else
          setProfileData({
            center_id: '1',
            name: '서울 도서관',
            contact_number: '010-~~~',
            homepage_link: 'www.~~~',
            introduce: '서울 도서관에 대한 간단한 소개',
            interest: true,
            prefer_item: [
              {
                prefer_item_id: 1,
                item_name: '어린이 도서'
              },
              {
                prefer_item_id: 2,
                item_name: '간식'
              },
              {
                prefer_item_id: 3,
                item_name: '복숭아'
              }
            ]
          });
      }
    };
    fetchData();
  }, [center_id]);

  return {
    profileData
  };
};
