import { ApplyButton, ApplyTextArea, MessageCreateModalCss } from './indexCss';
import { useSendMail } from './logic/useSendMail';
import InputBox from '@/components/inputBox';
import Modal from '@/components/modal';
import { useAlertDialog } from '@/store/stores/dialog/dialogStore'; // AlertDialog import 추가

interface MessageCreateModalProps {
  user_id: string;
  isModalOpen: boolean;
  setIsModalOpen: (bool: boolean) => void;
}

const MessageCreateModal: React.FC<MessageCreateModalProps> = ({ user_id, isModalOpen, setIsModalOpen }) => {
  console.log('messageCreateModal', user_id);
  const { checkTitle, checkContent, checkSend, errMsg, resMsg } = useSendMail({ user_id, setIsModalOpen });
  const { openAlert } = useAlertDialog(); // AlertDialog 사용

  const handleSendClick = () => {
    // 전송 로직 실행
    checkSend();
    openAlert(resMsg);
  };

  return (
    <MessageCreateModalCss id={user_id}>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} variant="small">
        <div className="modalInnerWrap">
          <i>쪽지 작성</i>
          <div className="inputWrap">
            <i>제목</i>
            <InputBox colortype="gray" placeholder="제목을 입력해주세요" setFunc={(txt) => checkTitle(txt)} />
          </div>
          <div className="inputWrap">
            <i>내용</i>
            <ApplyTextArea colortype="gray" placeholder="내용을 입력해주세요" setFunc={(txt) => checkContent(txt)} />
          </div>
          <div className="btnWrap">
            <i className="checkErr">{errMsg}</i>
            <ApplyButton label="전송" onClick={handleSendClick} disabled={!!errMsg} type="blue" />
          </div>
        </div>
      </Modal>
    </MessageCreateModalCss>
  );
};
export default MessageCreateModal;
