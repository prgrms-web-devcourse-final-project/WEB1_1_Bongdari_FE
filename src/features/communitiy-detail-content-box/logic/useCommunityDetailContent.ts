import { useLoginStore } from '@/store/stores/login/loginStore';
import { communityDetailType } from '@/shared/types/community-type/CommuntiyTypes';
import { personProfileType } from '@/shared/types/person-profile/personProfile';
import { useCommunityDetail } from '@/store/queries/community-detail-common-query/useCommunityDetailContent';
import { usePersonProfileQuery } from '@/store/queries/volunteer-profile/useFetchPersonProfile';
import { useEffect, useState } from 'react';

interface useCommunityDetailContentReturn {
  detailData: communityDetailType | undefined;
  writerData: personProfileType | undefined;
  isMyContent: boolean;
}

export const useCommunityDetailContent = (content_id: number): useCommunityDetailContentReturn => {
  const [communityWriterData, setCommunityWriterData] = useState();
  const [communityDetailData, setCommunityDetailData] = useState();
  const myRoleId = useLoginStore((state) => state.myRoleId);
  const loginType = useLoginStore((state) => state.loginType);

  // 커뮤니티 상세 데이터 가져오기
  const { data: detailData } = useCommunityDetail(content_id);
  const { data: writerData } = usePersonProfileQuery(detailData?.writer_id ?? '');

  // 내 콘텐츠 여부 확인
  const isMyContent = detailData ? loginType === 'ROLE_VOLUNTEER' && detailData.writer_id === myRoleId : false;

  // 데이터 업데이트되면 리랜더링
  useEffect(() => {
    console.log('Detail Data:', detailData);
    console.log('Writer Data:', writerData);
    if (detailData) setCommunityDetailData(detailData);
    if (writerData) setCommunityWriterData(writerData);
  }, [detailData, writerData]);

  return { detailData: communityDetailData, writerData: communityWriterData, isMyContent };
};
