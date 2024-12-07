import { CommunityCreateBoxCss } from './indexCss';
import { useCreateCommunity } from './logic/useCreateCommunity';
import { SubmitButton } from '@/components/button';
import InputBox from '@/components/inputBox';
import TextArea from '@/components/textArea';
import UploadBox from '@/components/img-drag-box';

const CommunityCreateBox = ({ content_id }: { content_id?: number }) => {
  const { titleText, setTitleText, contentText, setContentText, handleFileSelect, onClickPost } = useCreateCommunity({
    content_id
  });

  return (
    <CommunityCreateBoxCss>
      <div className="inputWrap">
        <i className="label">제목</i>
        <InputBox
          colortype={1}
          width="100%"
          placeholder="제목을 입력하세요"
          value={titleText}
          getInputText={(str) => console.log(str)}
          setFunc={setTitleText}
        />
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
          value={contentText}
          getInputText={(str) => console.log(str)}
          setFunc={setContentText}
        />
      </div>

      <div className="btnWrap">
        <SubmitButton label="작성하기" onClick={onClickPost} />
      </div>
    </CommunityCreateBoxCss>
  );
};
export default CommunityCreateBox;
