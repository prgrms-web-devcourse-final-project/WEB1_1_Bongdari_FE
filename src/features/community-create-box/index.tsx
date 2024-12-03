import { useEffect } from 'react';
import { CommunityCreateBoxCss } from './indexCss';
import InputBox from '@/components/inputBox';
import TextArea from '@/components/textArea';
import UploadBox from '@/components/img-drag-box';
import { SubmitButton } from '@/components/button';

const CommunityCreateBox = ({ content_id }: { content_id?: number }) => {
  const handleFileSelect = (files: File[]) => {
    console.log('Selected files:', files);
  };

  useEffect(() => {
    // TODO: content_id가 존재하면 수정, 없으면 새로 작성 하도록
    if (content_id) console.log('//TODO: ', content_id, ' 커뮤니티 글 fetch');
  });

  return (
    <CommunityCreateBoxCss>
      <div className="inputWrap">
        <i className="label">제목</i>
        <InputBox colortype={1} width="100%" placeholder="제목을 입력하세요" getInputText={(str) => console.log(str)} />
      </div>
      <div className="inputWrap">
        <i className="label">이미지</i>
        <UploadBox onFileSelect={handleFileSelect} />
      </div>
      <div className="inputWrap">
        <i className="label">내용</i>
        <TextArea
          colortype={1}
          width="100%"
          height="450px"
          placeholder="내용을 입력하세요"
          getInputText={(str) => console.log(str)}
        />
      </div>

      <div className="btnWrap">
        <SubmitButton label="작성하기" />
      </div>
    </CommunityCreateBoxCss>
  );
};
export default CommunityCreateBox;
