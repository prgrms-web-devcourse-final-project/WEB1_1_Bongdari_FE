import InputBox from '@/components/inputBox';
import { RegisterBarContainer, RegisterButton } from './indexCss';

interface RegisterBarProps {
  inputGoods: string;
  setInputGoods: (value: string) => void;
  handleRegisterButton: () => void;
}

const RegisterBar: React.FC<RegisterBarProps> = ({ inputGoods, setInputGoods, handleRegisterButton }) => {
  return (
    <RegisterBarContainer>
      <InputBox
        getInputText={setInputGoods}
        setFunc={setInputGoods}
        colortype={1}
        width="776px"
        height="53px"
        placeholder="최대 15자 이내로 입력해주세요."
        initialVal={inputGoods}
      />
      <RegisterButton onClick={handleRegisterButton}>등록하기</RegisterButton>
    </RegisterBarContainer>
  );
};

export default RegisterBar;
