import { useEffect, useState } from 'react';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { communityDetailType } from '@/shared/types/community-type/CommuntiyTypes';
import { personProfileType } from '@/shared/types/person-profile/personProfile';
import { fetchCommunityDetailContent } from '@/store/queries/community-detail-common-query/useCommunityDetailContent';
import { fetchPersonProfile } from '@/store/queries/volunteer-profile/useFetchPersonProfile';

interface useCommunityDetailContentReturn {
  detailData: communityDetailType | undefined;
  writerData: personProfileType | undefined;
  isMyContent: boolean;
}

export const useCommunityDetailContent = (content_id: number): useCommunityDetailContentReturn => {
  const [detailData, setDetailData] = useState<communityDetailType>();
  const [writerData, setWriterData] = useState<personProfileType>();
  const [isMyContent, setIsMyContent] = useState<boolean>(false);
  const myLoginId = useLoginStore((state) => state.myLoginId);
  const loginType = useLoginStore((state) => state.loginType);

  // 첫 데이터 불러오기
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCommunityDetailContent(content_id);
      if (data && !detailData) {
        setDetailData(data);
        console.log('ismycontent? myloginId is', myLoginId, 'and writer_id is', data.writer_id);
        if (loginType === 'ROLE_VOLUNTEER' && data.writer_id === myLoginId) setIsMyContent(true);
        const data2 = await fetchPersonProfile(data.writer_id);
        if (data2) setWriterData(data2.data);
      }
    };

    fetchData();
  }, []);

  return { detailData, writerData, isMyContent };
};
