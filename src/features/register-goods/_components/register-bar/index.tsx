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
  // 로컬 상태로 input 값 관리
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCurrentInput(value);
  };

  return (
    <RegisterBarContainer>
      <RegisterInput
        placeholder="최대 15자 이내로 입력해주세요."
        type="text"
        value={currentInput}
        maxLength={15}
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
        disabled={disabled}
      />
      <RegisterButton onClick={() => handleAddGoods(currentInput)} type="white" label="등록하기" />
    </RegisterBarContainer>
  );
};

export default RegisterBar;
