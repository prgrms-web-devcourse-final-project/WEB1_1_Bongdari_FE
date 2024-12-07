import { useEffect, useState } from 'react';
import { fetchCommunityComment, postCommunityComment } from './fetchCommunityComment';
import { commentType } from '@/shared/types/community-type/CommuntiyTypes';
import { fetchMyProfile } from '@/pages/personal-my-page/_component/logic/fetchMyData';

interface useCommunityCommentReturn {
  commentData: commentType[] | undefined;
  commentCount: number;
  commentText: string;
  loginName: string;
  setCommentText: (text: string) => void;
  onEventPost: () => void;
  updateComments: () => void;
}

export const useCommunityComment = (content_id: number): useCommunityCommentReturn => {
  const [commentData, setCommentData] = useState<commentType[]>();
  const [commentCount, setCommentCount] = useState<number>(0);
  const [commentText, setCommentText] = useState<string>('');
  const [loginName, setLoginName] = useState<string>('');

  // 댓글 post
  const onEventPost = async () => {
    if (commentText === '') return;
    setCommentText('');

    const fetchData = async () => {
      const data = await postCommunityComment(content_id, commentText);
      console.log('comment post ', data); //
      if (data) {
        // 댓글 post 성공 시 전체 댓글 다시 fetch
        console.log('comment post ', data);
        setCommentCount(data);
        const data2 = await fetchCommunityComment(content_id);
        if (data2) {
          setCommentData(data2.data.content);
        }
      }
    };
    fetchData();
  };

  // 삭제 성공시 다시 불러오기
  const updateComments = () => {
    const fetchData = async () => {
      const data = await fetchCommunityComment(content_id);
      if (data) {
        setCommentData(data.data.content);
        console.log(data.data.content);
      }
      setCommentCount(data.data.content.length);
    };
    fetchData();
  };

  // 처음 데이터 불러오기
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCommunityComment(content_id);
      if (data) {
        setCommentData(data.data.content);
        console.log(data.data.content);
      } else {
        setCommentData([
          {
            id: 11,
            writer_nickname: 'Aperson123',
            content:
              '손모아 사이트 아주 좋습니다. 저는 6년째 사용중 입니다.손모아 사이트 아주 좋습니다. 저는 6년째 사용중 입니다.손모아 사이트 아주 좋습니다. 저는 6년째  사용중 입니다.',
            updated_at: '2024-12-06T03:02:30.222Z',
            replies: [
              {
                id: 1,
                replies: [],
                writer_nickname: '710minjoon',
                content: '답변 감사합니다.',
                updated_at: '2024-12-06T03:02:30.222Z'
              },
              {
                id: 2,
                replies: [],
                writer_nickname: 'aperson123',
                content: '궁금한 것 있으시면 쪽지주세요.',
                updated_at: '2024-12-06T03:02:30.222Z'
              }
            ]
          },
          {
            id: 22,
            writer_nickname: 'joo123',
            content: '혹시 다른 사이트 추천도 가능하면 댓글로 알려주세요',
            updated_at: '2024-12-06T03:02:30.222Z',
            replies: []
          }
        ]);
      }
      setCommentCount(data.data.content.length);
    };
    fetchData();
  }, [content_id]);

  // 로그인한 사람 이름 가져오기
  useEffect(() => {
    const getLoginName = async () => {
      // const loginName = 'nn';
      const data = await fetchMyProfile();
      setLoginName(data.nickname);
    };
    getLoginName();
  }, []);

  return { commentData, commentCount, commentText, loginName, setCommentText, onEventPost, updateComments };
};
