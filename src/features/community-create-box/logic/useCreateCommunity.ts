import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { useCommunityDetail } from '@/store/queries/community-detail-common-query/useCommunityDetailContent';
import { usePostCommunity, usePutCommunity } from '@/store/queries/community-create-common-query/useControlCommunity';

interface useCreateCommunityReturn {
  titleText: string;
  setTitleText: (text: string) => void;
  contentText: string;
  setContentText: (text: string) => void;
  handleFileSelect: (files: File[]) => void;
  onClickPost: () => void;
}

export const useCreateCommunity = ({ content_id }: { content_id?: number }): useCreateCommunityReturn => {
  const { mutate: postCommunity } = usePostCommunity({
    onSuccess: (data) => {
      console.log('Post success:', data);
      navigate(`/community/${content_id}`);
    },
    onError: (error) => {
      console.error('Post error:', error);
    }
  });

  const { mutate: putCommunity } = usePutCommunity({
    onSuccess: (data) => {
      console.log('Put success:', data);
      navigate(`/community/${content_id}`);
    },
    onError: (error) => {
      console.error('Put error:', error);
    }
  });

  const [titleText, setTitleText] = useState<string>('');
  const [contentText, setContentText] = useState<string>('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isMyContent, setIsMyContent] = useState<boolean>(false);
  const myLoginId = useLoginStore((state) => state.myLoginId);
  const navigate = useNavigate();

  // 선택된 이미지 파일 저장
  const handleFileSelect = (files: File[]) => {
    console.log('Selected files:', files);
    setSelectedFiles(files);
  };

  // 글 작성 완료
  const onClickPost = async () => {
    try {
      // JSON 데이터를 준비
      const jsonPayload = {
        title: titleText,
        content: contentText
      };

      // FormData 생성
      const formData = new FormData();
      formData.append('data', JSON.stringify(jsonPayload)); // data 필드에 JSON 추가

      // img_file에 선택한 파일 추가
      if (selectedFiles.length > 0) {
        formData.append('img_file', selectedFiles[0]); // img_file은 단일 파일만 지원한다고 가정
      }

      if (isMyContent && content_id) {
        // 게시글 수정
        putCommunity({ content_id, formData });
      } else {
        // 게시글 등록
        postCommunity(formData);
      }
    } catch (error) {
      console.error('Post error:', error);
    }

    navigate(`/community/${content_id}`);
  };

  // content_id가 존재하고 내 글이면 수정, 아니면 새로 작성
  const { data } = useCommunityDetail(content_id ?? 0);

  useEffect(() => {
    if (content_id && data) {
      // 내 글인지 확인
      if (data.writer_id === myLoginId) {
        setIsMyContent(true);
        setTitleText(data.title);
        setContentText(data.content);
      } else {
        alert('내가 작성한 글만 수정할 수 있습니다.');
        navigate('/community');
      }
    }
  }, [data, myLoginId, navigate]);

  return { titleText, setTitleText, contentText, setContentText, handleFileSelect, onClickPost };
};
