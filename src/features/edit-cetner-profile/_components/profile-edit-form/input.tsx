import InputBox from '@/components/inputBox';
import { EditFormWrapper, EditItem, EditItem_TextArea, EditLabel } from './inputCss';
import TextArea from '@/components/textArea';

interface EditProfileFormProps {
  centerName: string;
  handleInputText: (inputText: string) => void;
  onChangeCenterName: (newName: string) => void;
}

const EditProfileForm = ({ centerName, handleInputText, onChangeCenterName }: EditProfileFormProps) => {
  // 기관명 작성 후, 상위 컴포넌트로 전달하여 마이페이지 title 부분에 바로 반영하는 로직
  const handleCenterName = (newName: string) => {
    onChangeCenterName(newName);
  };

  return (
    <EditFormWrapper>
      <EditItem>
        <EditLabel htmlFor="centerName">기관명</EditLabel>
        <InputBox
          getInputText={handleCenterName}
          colortype={1}
          width="480px"
          height="38px"
          placeholder="기관명을 입력해주세요"
          initialVal={centerName}
        />
      </EditItem>
      <EditItem>
        <EditLabel htmlFor="centerPhone">연락처</EditLabel>
        <InputBox
          getInputText={handleInputText}
          colortype={1}
          width="480px"
          height="38px"
          placeholder="연락처를 입력해주세요"
          initialVal={centerName}
        />
      </EditItem>
      <EditItem>
        <EditLabel htmlFor="centerURL">사이트</EditLabel>
        <InputBox
          getInputText={handleInputText}
          colortype={1}
          width="480px"
          height="38px"
          placeholder="사이트 주소를 입력해주세요"
          initialVal={centerName}
        />
      </EditItem>
      <EditItem_TextArea>
        <EditLabel htmlFor="centerDescription" style={{ paddingTop: '14px' }}>
          설명
        </EditLabel>
        <TextArea
          getInputText={handleInputText}
          colortype={1}
          width="480px"
          height="220px"
          placeholder="기관에 대한 간단한 소개를 작성해주세요"
          initialVal={centerName}
        />
      </EditItem_TextArea>
    </EditFormWrapper>
  );
};

export default EditProfileForm;
