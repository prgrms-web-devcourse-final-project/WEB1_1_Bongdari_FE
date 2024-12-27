import { useLoginStore } from '@/store/stores/login/loginStore';
import { communityDetailType } from '@/shared/types/community-type/CommuntiyTypes';
import { personProfileType } from '@/shared/types/person-profile/personProfile';
import { useCommunityDetail } from '@/store/queries/community-detail-common-query/useCommunityDetailContent';
import { usePersonProfileQuery } from '@/store/queries/volunteer-profile/useFetchPersonProfile';

interface useCommunityDetailContentReturn {
  detailData: communityDetailType | undefined;
  writerData: personProfileType | undefined;
  isMyContent: boolean;
}

export const useCommunityDetailContent = (content_id: number): useCommunityDetailContentReturn => {
  const myLoginId = useLoginStore((state) => state.myLoginId);
  const loginType = useLoginStore((state) => state.loginType);

  // 커뮤니티 상세 데이터 가져오기
  const { data: detailData } = useCommunityDetail(content_id);
  const { data: writerData } = usePersonProfileQuery(detailData?.writer_id ?? '');

  // 내 콘텐츠 여부 확인
  const isMyContent = detailData ? loginType === 'ROLE_VOLUNTEER' && detailData.writer_id === myLoginId : false;

  return { detailData, writerData, isMyContent };
};
