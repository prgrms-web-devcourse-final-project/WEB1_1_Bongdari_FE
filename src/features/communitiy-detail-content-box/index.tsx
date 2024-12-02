import { useEffect } from 'react';
import { CommunityDetailContentBoxCss } from './indexCss';
import { communityDetailType } from '@/shared/types/community-type/CommuntiyTypes';
import { SubmitButton } from '@/components/button';
import WriterProfileBox from './ui/WriterProfileBox';

const CommunityDetailContentBox = ({ content_id }: { content_id: number }) => {
  const tmpdata: communityDetailType = {
    id: content_id,
    writer_id: 'jooyoung123',
    title: '손모아 사이트 어떤가요?',
    content: `안녕하세요, 저는 손모아 사이트에 새롭게 가입한 김민준입니다. 손모아 사이트에서 여러가지 봉사활동을 서치하고 지원해서 봉사활동 시간을 쌓고 싶습니다.
손모아, 신뢰 할 만한 사이트 인가요?? 오랫동안 사용하신 손모아 무지개장갑 분들의 의견을 여쭙고 싶습니다. 
안녕하세요, 저는 손모아 사이트에 새롭게 가입한 김민준입니다. 손모아 사이트에서 여러가지 봉사활동을 서치하고 지원해서 봉사활동 시간을 쌓고 싶습니다.
손모아, 신뢰 할 만한 사이트 인가요?? 오랫동안 사용하신 손모아 무지개장갑 분들의 의견을 여쭙고 싶습니다. 
안녕하세요, 저는 손모아 사이트에 새롭게 가입한 김민준입니다. 손모아 사이트에서 여러가지 봉사활동을 서치하고 지원해서 봉사활동 시간을 쌓고 싶습니다.
손모아, 신뢰 할 만한 사이트 인가요?? 오랫동안 사용하신 손모아 무지개장갑 분들의 의견을 여쭙고 싶습니다.`,
    img_url: '',
    created_at: new Date(),
    updated_at: new Date()
  };
  useEffect(() => {
    // TODO: content_id의 데이터 fetch
    console.log('TODO: ', content_id, '의 데이터 fetch');
  });
  return (
    <CommunityDetailContentBoxCss>
      <i className="title">{tmpdata.title}</i>
      <i className="modifiedDate">최근 수정일: {tmpdata.updated_at.toLocaleDateString()}</i>
      <WriterProfileBox {...tmpdata} />
      <div className="content">{tmpdata.content}</div>
      <div className="btnWrap">
        <SubmitButton label="수정하기" />
      </div>
    </CommunityDetailContentBoxCss>
  );
};
export default CommunityDetailContentBox;
