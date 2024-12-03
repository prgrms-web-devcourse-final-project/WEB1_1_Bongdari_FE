import { MessageCreateModalCss } from './indexCss';
import { useSendMail } from './logic/useSendMail';
import { SubmitButton } from '@/components/button';
import InputBox from '@/components/inputBox';
import TextArea from '@/components/textArea';
import Modal from '@/components/modal';

interface MessageCreateModalProps {
  user_id: string;
  isModalOpen: boolean;
  setIsModalOpen: (bool: boolean) => void;
}

const MessageCreateModal: React.FC<MessageCreateModalProps> = ({ user_id, isModalOpen, setIsModalOpen }) => {
  const { checkTitle, checkContent, checkSend, errMsg } = useSendMail({ user_id, setIsModalOpen });
  return (
    <MessageCreateModalCss id={user_id}>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} variant="small">
        <div className="modalInnerWrap">
          <i>쪽지 작성</i>
          <div className="inputWrap">
            <i>제목</i>
            <InputBox
              colortype={1}
              width="100%"
              placeholder="제목을 입력해주세요"
              getInputText={(txt) => checkTitle(txt)}
              setFunc={(txt) => checkTitle(txt)}
            />
          </div>
          <div className="inputWrap">
            <i>내용</i>
            <TextArea
              colortype={1}
              width="100%"
              height="220px"
              placeholder="내용을 입력해주세요"
              getInputText={(txt) => checkContent(txt)}
              setFunc={(txt) => checkContent(txt)}
            />
          </div>
          <div className="btnWrap">
            <i className="checkErr">{errMsg}</i>
            <SubmitButton label="전송" onClick={checkSend} variant={errMsg ? 'disabled' : 'enabledOne'} />
          </div>
        </div>
      </Modal>
    </MessageCreateModalCss>
  );
};
export default MessageCreateModal;
