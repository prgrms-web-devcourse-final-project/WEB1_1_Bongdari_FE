import { useEffect, useState } from 'react';

import { CommunityDetailCommentBoxCss } from './indexCss';
import { SubmitButton } from '@/components/button';
import InputBox from '@/components/inputBox';
import Comment from './ui/Comment';

const CommunityDetailCommentBox = ({ content_id }: { content_id: number }) => {
  const [commentCount, setCommentCount] = useState<number>(0);
  const tmpdata = [
    {
      writer_id: 'Aperson123',
      content:
        '손모아 사이트 아주 좋습니다. 저는 6년째 사용중 입니다.손모아 사이트 아주 좋습니다. 저는 6년째 사용중 입니다.손모아 사이트 아주 좋습니다. 저는 6년째  사용중 입니다.',
      updated_on: new Date(),
      add_comment: [
        {
          writer_id: '710minjoon',
          content: '답변 감사합니다.',
          updated_on: new Date()
        },
        {
          writer_id: 'aperson123',
          content: '궁금한 것 있으시면 쪽지주세요.',
          updated_on: new Date()
        }
      ]
    },
    {
      writer_id: 'joo123',
      content: '혹시 다른 사이트 추천도 가능하면 댓글로 알려주세요',
      updated_on: new Date(),
      add_comment: []
    }
  ];

  useEffect(() => {
    // TODO: content_id의 댓글 데이터 fetch
    console.log('TODO: ', content_id, '의 댓글 데이터 fetch');
    setCommentCount(tmpdata.length);
  }, [content_id, tmpdata.length]);

  return (
    <CommunityDetailCommentBoxCss>
      <i className="title">{`댓글 (${commentCount})`}</i>
      <div className="commentInput">
        <InputBox colortype={0} width="100%" getInputText={(str) => console.log(str)} />
        <SubmitButton label="댓글 등록" />
      </div>
      <div className="commentWrap">
        {tmpdata.map((v) => (
          <Comment {...v} />
        ))}
      </div>
    </CommunityDetailCommentBoxCss>
  );
};
export default CommunityDetailCommentBox;
