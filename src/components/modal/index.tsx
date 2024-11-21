import { ModalWrapper, ModalContainer, CloseButton } from './indexCss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant: 'big' | 'small';
  children?: React.ReactNode;
}

const Modal = ({ isOpen, onClose, variant, children }: ModalProps) => {
  if (!isOpen) return null;

  // 모달 내부 클릭 시 이벤트 버블링 방지
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContainer variant={variant} onClick={handleModalClick}>
        {children}
        <CloseButton onClick={onClose}>
          <i className="fa-solid fa-x"></i>
        </CloseButton>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
