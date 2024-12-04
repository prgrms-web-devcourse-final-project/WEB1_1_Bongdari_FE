import InputBox from '@/components/inputBox';
import TextArea from '@/components/textArea';
import { InputWithLabelCss } from './InputWithLabelCss';

interface InputWithLabelProps {
  getInput: (inputText: string) => void;
  height?: string;
  initialVal?: string;
  placeholder?: string;

  isTextArea?: boolean;
}
const InputWithLabel: React.FC<InputWithLabelProps> = ({
  getInput,
  height,
  initialVal,
  placeholder,

  isTextArea = false
}) => {
  if (isTextArea) {
    return (
      <InputWithLabelCss>
        <i className="label">설명</i>
        <TextArea
          getInputText={getInput}
          colortype={1}
          width="100%"
          height={height}
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
          getInputText={getInput}
          colortype={1}
          width="100%"
          initialVal={initialVal}
          placeholder={placeholder}
        />
      </InputWithLabelCss>
    );
  }
};
export default InputWithLabel;
