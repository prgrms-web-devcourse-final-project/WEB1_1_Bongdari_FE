import InputBox from '@/components/inputBox';
import { RegisterBarContainer, RegisterButton } from './indexCss';

const RegisterBar = () => {
  return (
    <RegisterBarContainer>
      <InputBox
        getInputText={() => console.log('입력')}
        colortype={1}
        borderradius="8px"
        width="776px"
        height="53px"
        placeholder="최대 15자 이내로 입력해주세요."
      />
      <RegisterButton onClick={() => console.log('클릭됨')}>등록하기</RegisterButton>
    </RegisterBarContainer>
  );
};

export default RegisterBar;
