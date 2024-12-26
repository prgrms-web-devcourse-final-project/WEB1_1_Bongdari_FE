import { useLoginStore } from '@/store/stores/login/loginStore';
import { communityDetailType } from '@/shared/types/community-type/CommuntiyTypes';
import { personProfileType } from '@/shared/types/person-profile/personProfile';
import { useCommunityDetail } from '@/store/queries/community-detail-common-query/useCommunityDetailContent';
// import { fetchPersonProfile } from '@/store/queries/volunteer-profile/useFetchPersonProfile';

interface useCommunityDetailContentReturn {
  detailData: communityDetailType | undefined;
  writerData: personProfileType | undefined;
  isMyContent: boolean;
}

export const useCommunityDetailContent = (content_id: number): useCommunityDetailContentReturn => {
  const myLoginId = useLoginStore((state) => state.myLoginId);
  const loginType = useLoginStore((state) => state.loginType);

  // useCommunityDetail을 통해 커뮤니티 상세 데이터 가져오기
  // const { data: detailData, isLoading: isLoadingDetailData, error: detailDataError } = useCommunityDetail(content_id);
  const { data: detailData } = useCommunityDetail(content_id);

  // writerData를 가져오기 위한 쿼리 (tmp)
  const writerData: personProfileType = {
    volunteer_id: 'c85c117f-8df9-448a-b3be-7876c853f522',
    nickname: 'a431d0d4',
    tier: 'YELLOW',
    detail: null
  };

  // 내 콘텐츠 여부 확인
  const isMyContent = detailData ? loginType === 'ROLE_VOLUNTEER' && detailData.writer_id === myLoginId : false;

  return { detailData, writerData, isMyContent };
};
