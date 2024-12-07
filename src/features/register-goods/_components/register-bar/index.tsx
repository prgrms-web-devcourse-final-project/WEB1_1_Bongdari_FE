import { RegisterBarContainer, RegisterButton, RegisterInput } from './indexCss';

interface RegisterBarProps {
  currentInput: string;
  setCurrentInput: (value: string) => void;
  handleAddGoods: (itemName: string) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const RegisterBar: React.FC<RegisterBarProps> = ({
  currentInput,
  setCurrentInput,
  handleAddGoods,
  handleKeyPress,
  disabled = false
}) => {
  return (
    <RegisterBarContainer>
      <RegisterInput
        placeholder="최대 15자 이내로 입력해주세요."
        type="text"
        value={currentInput}
        maxLength={15}
        onChange={(e) => setCurrentInput(e.target.value)}
        onKeyUp={handleKeyPress}
        disabled={disabled}
      />
      <RegisterButton onClick={() => handleAddGoods(currentInput)} disabled={disabled}>
        등록하기
      </RegisterButton>
    </RegisterBarContainer>
  );
};

export default RegisterBar;
