import { RegisterBarContainer, RegisterButton, RegisterInput } from './indexCss';

interface RegisterBarProps {
  currentInput: string;
  setCurrentInput: (value: string) => void;
  handleAddGoods: () => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const RegisterBar: React.FC<RegisterBarProps> = ({ currentInput, setCurrentInput, handleAddGoods, handleKeyPress }) => {
  return (
    <RegisterBarContainer>
      <RegisterInput
        placeholder="최대 15자 이내로 입력해주세요."
        type="text"
        value={currentInput}
        maxLength={15}
        onChange={(e) => setCurrentInput(e.target.value)}
        onKeyUp={handleKeyPress}
      />
      <RegisterButton onClick={handleAddGoods}>등록하기</RegisterButton>
    </RegisterBarContainer>
  );
};

export default RegisterBar;
