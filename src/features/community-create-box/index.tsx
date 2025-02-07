import { ApplyButton, CommunityCreateBoxCss } from './indexCss';
import { useCreateCommunity } from './logic/useCreateCommunity';
import InputBox from '@/components/inputBox';
// import TextArea from '@/components/textArea';
import { TinyMceContainer } from '@/components/tinyMCE-editor';

const CommunityCreateBox = ({ content_id }: { content_id?: number }) => {
  const { titleText, setTitleText, contentText, setContentText, onClickPost } = useCreateCommunity({
    content_id
  });

  return (
    <CommunityCreateBoxCss>
      <div className="inputWrap">
        <i className="label">제목</i>
        <InputBox
          // inputBox 고쳐주세요!!
          colortype="gray"
          placeholder="제목을 입력하세요"
          value={titleText}
          getInputText={(str) => console.log(str)}
          setFunc={setTitleText}
        />
      </div>
      <div className="inputWrap">
        <i className="label">내용</i>
        {/* <TextArea
          // TextArea 고쳐주세요!!
          // height="450px"
          colortype="gray"
          placeholder="내용을 입력하세요"
          value={contentText}
          getInputText={(str) => console.log(str)}
          setFunc={setContentText}
        /> */}
        <TinyMceContainer htmlContent={contentText} setHtmlContent={setContentText} />
      </div>

      <div className="btnWrap">
        <ApplyButton label="작성하기" type="blue" onClick={onClickPost} />
      </div>
    </CommunityCreateBoxCss>
  );
};
export default CommunityCreateBox;
