import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginStore } from '@/store/stores/login/loginStore';
import { useCommunityDetail } from '@/store/queries/community-detail-common-query/useCommunityDetailContent';
import { usePostCommunity, usePutCommunity } from '@/store/queries/community-create-common-query/useControlCommunity';
import { useAlertDialog } from '@/store/stores/dialog/dialogStore';

interface useCreateCommunityReturn {
  titleText: string;
  setTitleText: (text: string) => void;
  contentText: string;
  setContentText: (text: string) => void;
  handleFileSelect: (files: File[]) => void;
  onClickPost: () => void;
}

export const useCreateCommunity = ({ content_id }: { content_id: number }): useCreateCommunityReturn => {
  const { mutate: postCommunity } = usePostCommunity({
    onSuccess: (data) => {
      // data는 글 번호(id)
      // console.log('Post success:', data);
      openAlert('글이 성공적으로 등록되었습니다.');
      navigate(`/community/${data}`);
    },
    onError: (error) => {
      console.error('커뮤니티 글 등록 중 오류가 발생했습니다.', error);
      openAlert('글 등록 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  });

  const { mutate: putCommunity } = usePutCommunity({
    onSuccess: () => {
      // data는 비어있음
      // console.log('Put success:', data);
      openAlert('글이 성공적으로 수정되었습니다.');
      navigate(`/community/${content_id}`);
    },
    onError: (error) => {
      console.error('커뮤니티 수정 중 오류가 발생했습니다.', error);
      openAlert('글 수정 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  });

  const [titleText, setTitleText] = useState<string>('');
  const [contentText, setContentText] = useState<string>('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isMyContent, setIsMyContent] = useState<boolean>(false);
  const myLoginId = useLoginStore((state) => state.myLoginId);
  const navigate = useNavigate();
  const { openAlert } = useAlertDialog();

  // 선택된 이미지 파일 저장
  const handleFileSelect = (files: File[]) => {
    setSelectedFiles(files);
  };

  // 글 작성 완료
  const onClickPost = async () => {
    // 유효성 검사 추가 (제목, 컨텐츠는 꼭 필요하므로)
    if (!titleText.trim()) {
      openAlert('제목을 입력해주세요.');
      return;
    }
    if (!contentText.trim()) {
      openAlert('내용을 입력해주세요.');
      return;
    }

    // JSON 데이터를 준비
    const jsonPayload = {
      title: titleText.trim(),
      content: contentText.trim()
    };

    // FormData 생성
    const formData = new FormData();
    formData.append('data', JSON.stringify(jsonPayload)); // data 필드에 JSON 추가

    // img_file에 선택한 파일 추가
    if (selectedFiles.length > 0) {
      formData.append('img_file', selectedFiles[0]); // img_file은 단일 파일만 지원한다고 가정
    }

    try {
      if (isMyContent && content_id) {
        // 게시글 수정
        putCommunity({ content_id, formData });
      } else {
        // 게시글 등록
        postCommunity(formData);
      }
    } catch (error) {
      console.error('게시글 등록 중 오류가 발생했습니다.', error);
      openAlert('게시글 등록 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  // content_id가 존재하고 내 글이면 수정, 아니면 새로 작성
  const { data } = useCommunityDetail(content_id);

  useEffect(() => {
    // 수정 모드일 때만 데이터를 체크하도록 수정
    // 새로 작성하는 글은 post 할 때 id가 부여되기 때문에 content_id가 없어서 400 에러가 발생한다고 판단
    if (content_id && data) {
      if (data) {
        if (data.writer_id === myLoginId) {
          setIsMyContent(true);
          setTitleText(data.title);
          setContentText(data.content);
        } else {
          openAlert('내가 작성한 글만 수정할 수 있습니다.');
          navigate('/community');
        }
      }
    }
  }, [data, myLoginId, navigate]);

  return { titleText, setTitleText, contentText, setContentText, handleFileSelect, onClickPost };
};
