import InputBox from '@/components/inputBox';
import TextArea from '@/components/textArea';
import { InputWithLabelCss } from './InputWithLabelCss';

interface InputWithLabelProps {
  getInput: (inputText: string) => void;
  // TextArea 고쳐주세요!!
  // height?: string;
  initialVal?: string;
  placeholder?: string;

  isTextArea?: boolean;
}
const InputWithLabel: React.FC<InputWithLabelProps> = ({
  getInput,
  // TextArea 고쳐주세요!!
  // height,
  initialVal,
  placeholder,

  isTextArea = false
}) => {
  if (isTextArea) {
    return (
      <InputWithLabelCss>
        <i className="label">설명</i>
        <TextArea
          // TextArea 고쳐주세요!!
          // height={height}
          getInputText={getInput}
          colortype="gray"
          initialVal={initialVal}
          placeholder={placeholder}
        />
      </InputWithLabelCss>
    );
  } else {
    return (
      <InputWithLabelCss>
        <i className="label">닉네임</i>
        <InputBox
          // inputBox 고쳐주세요!!
          getInputText={getInput}
          colortype="gray"
          initialVal={initialVal}
          placeholder={placeholder}
        />
      </InputWithLabelCss>
    );
  }
};
export default InputWithLabel;
