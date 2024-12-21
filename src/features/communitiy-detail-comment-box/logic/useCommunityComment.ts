import { useEffect, useState } from 'react';
import { commentType } from '@/shared/types/community-type/CommuntiyTypes';
import { useLoginStore } from '@/store/stores/login/loginStore';
import {
  fetchCommunityComment,
  postCommunityComment
} from '@/store/queries/community-detail-common-query/useCommunityComment';
import { fetchMyProfile } from '@/store/queries/volunteer-mypage/useFetchMyData';

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
  const myLoginId = useLoginStore((state) => state.myLoginId);
  const loginType = useLoginStore((state) => state.loginType);

  // 댓글 post
  const onEventPost = async () => {
    if (commentText === '') return;
    setCommentText('');

    const postData = async () => {
      const data = await postCommunityComment(content_id, commentText);
      console.log('logininfo', myLoginId, loginType);
      console.log('comment post ', data); //
      if (data) {
        // 댓글 post 성공 시 전체 댓글 다시 fetch
        updateComments();
      }
    };
    postData();
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
      if (data && !commentData) {
        setCommentData(data.data.content);
      }
      setCommentCount(data.data.content.length);
    };
    fetchData();
  }, []);

  // 로그인한 사람 이름 가져오기
  useEffect(() => {
    const getLoginName = async () => {
      const data = await fetchMyProfile();
      setLoginName(data?.nickname ?? '');
      console.log('login nickname:', data?.nickname);
    };
    getLoginName();
  }, []);

  return { commentData, commentCount, commentText, loginName, setCommentText, onEventPost, updateComments };
};
