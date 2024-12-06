import { useEffect, useState } from 'react';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { communityDetailType } from '@/shared/types/community-type/CommuntiyTypes';
import { personProfileType } from '@/shared/types/person-profile/personProfile';
import { fetchCommunityDetailContent } from './fetchCommunityDetailContent';
import { fetchPersonProfile } from '@/pages/personal-profile-page/logic/fetchPersonProfile';

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
    const fetchContentData = async () => {
      const data = await fetchCommunityDetailContent(content_id);
      if (data) setDetailData(data.data);
      else
        setDetailData({
          id: content_id,
          writer_id: 'jooyoung123',
          title: '손모아 사이트 어떤가요?',
          content: `안녕하세요, 저는 손모아 사이트에 새롭게 가입한 김민준입니다. 손모아 사이트에서 여러가지 봉사활동을 서치하고 지원해서 봉사활동 시간을 쌓고 싶습니다.
        손모아, 신뢰 할 만한 사이트 인가요?? 오랫동안 사용하신 손모아 무지개장갑 분들의 의견을 여쭙고 싶습니다. 
        안녕하세요, 저는 손모아 사이트에 새롭게 가입한 김민준입니다. 손모아 사이트에서 여러가지 봉사활동을 서치하고 지원해서 봉사활동 시간을 쌓고 싶습니다.
        손모아, 신뢰 할 만한 사이트 인가요?? 오랫동안 사용하신 손모아 무지개장갑 분들의 의견을 여쭙고 싶습니다. 
        안녕하세요, 저는 손모아 사이트에 새롭게 가입한 김민준입니다. 손모아 사이트에서 여러가지 봉사활동을 서치하고 지원해서 봉사활동 시간을 쌓고 싶습니다.
        손모아, 신뢰 할 만한 사이트 인가요?? 오랫동안 사용하신 손모아 무지개장갑 분들의 의견을 여쭙고 싶습니다.`,
          image_url: '',
          created_at: '2024-12-05T20:31:55',
          updated_at: '2024-12-05T20:31:56'
        });
    };

    const fetchProfileData = async () => {
      if (detailData) {
        const data = await fetchPersonProfile(detailData.writer_id);
        if (data) setWriterData(data.data);
        else {
          setWriterData({
            volunteer_id: '??',
            nickname: 'tmpProfile',
            img_url: '',
            introduce:
              '안녕 잘지내니 나는 잘지내 그래 너도 잘지내라 그래 나도 잘지낼게 안녕 잘지내니 나는 잘지내 그래 너도 잘지내라 그래 나도 잘지낼게 안녕 잘지내니 나는 잘지내 그래 너도 잘지내라 그래 나도 잘지낼게 ',
            tier: 'WHITE',
            total_volunteer_hours: 30,
            total_volunteer_count: 9,
            detail: null
          });
        }
      }
    };

    fetchContentData().then(() => fetchProfileData());

    if (loginType === 'person' && detailData?.writer_id === myLoginId) setIsMyContent(true);
  }, [content_id]);

  return { detailData, writerData, isMyContent };
};
