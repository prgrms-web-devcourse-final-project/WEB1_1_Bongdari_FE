import InputBox from '@/components/inputBox';
// import TextArea from '@/components/textArea';
import { ApplyTextArea, InputWithLabelCss } from './InputWithLabelCss';

interface InputWithLabelProps {
  getInput: (inputText: string) => void;
  $height?: string;
  initialVal?: string;
  placeholder?: string;

  isTextArea?: boolean;
}
const InputWithLabel: React.FC<InputWithLabelProps> = ({
  getInput,
  $height,
  initialVal,
  placeholder,

  isTextArea = false
}) => {
  if (isTextArea) {
    return (
      <InputWithLabelCss>
        <i className="label">설명</i>
        <ApplyTextArea
          $height={$height}
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
        <InputBox getInputText={getInput} colortype="gray" initialVal={initialVal} placeholder={placeholder} />
      </InputWithLabelCss>
    );
  }
};
export default InputWithLabel;
