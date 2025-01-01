import { ApplyTextArea, MessageCreateModalCss } from './indexCss';
import { useSendMail } from './logic/useSendMail';
import InputBox from '@/components/inputBox';
import Modal from '@/components/modal';
import { useAlertDialog } from '@/store/stores/dialog/dialogStore'; // AlertDialog import 추가
import Button from '@/components/button';

interface MessageCreateModalProps {
  user_id: string;
  isModalOpen: boolean;
  setIsModalOpen: (bool: boolean) => void;
}

const MessageCreateModal: React.FC<MessageCreateModalProps> = ({ user_id, isModalOpen, setIsModalOpen }) => {
  console.log('messageCreateModal', user_id);
  const { checkTitle, checkContent, checkSend, errMsg } = useSendMail({ user_id, setIsModalOpen });
  const { openAlert } = useAlertDialog(); // AlertDialog 사용

  const handleSendClick = () => {
    // if (errMsg) {
    //   // 에러가 있을 경우 Alert 표시
    //   openAlert('제목과 내용을 확인해주세요.');
    // } else {
    // 전송 로직 실행
    checkSend();
    openAlert('쪽지가 성공적으로 전송되었습니다.');
    // }
  };

  return (
    <MessageCreateModalCss id={user_id}>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} variant="small">
        <div className="modalInnerWrap">
          <i>쪽지 작성</i>
          <div className="inputWrap">
            <i>제목</i>
            <InputBox
              colortype="gray"
              placeholder="제목을 입력해주세요"
              getInputText={(txt) => checkTitle(txt)}
              setFunc={(txt) => checkTitle(txt)}
            />
          </div>
          <div className="inputWrap">
            <i>내용</i>
            <ApplyTextArea
              colortype="gray"
              placeholder="내용을 입력해주세요"
              getInputText={(txt) => checkContent(txt)}
              setFunc={(txt) => checkContent(txt)}
            />
          </div>
          <div className="btnWrap">
            <i className="checkErr">{errMsg}</i>
            <Button
              label="전송"
              onClick={handleSendClick} // Alert 포함한 함수 호출
              // variant={errMsg ? 'disabled' : 'enabledOne'} 버튼 커스텀 하실 때 풀어서 써주세요..!
            />
          </div>
        </div>
      </Modal>
    </MessageCreateModalCss>
  );
};
export default MessageCreateModal;
