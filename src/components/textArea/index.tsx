import TextAreaCss from './indexCss';
import { useInput } from './logic/useInput';

interface TextAreaProps {
  getInputText?: (inputText: string) => void; // inputText 상위전달
  colortype: 'white' | 'gray';
  disabled?: boolean;
  initialVal?: string; // input내의 초깃값
  placeholder?: string; // input의 placeholder
  value?: string;
  setFunc?: (inputText: string) => void;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  getInputText,
  colortype,
  disabled = false,
  initialVal = '',
  placeholder = '작성하세요.',
  value,
  setFunc,
  className
}: TextAreaProps) => {
  const { inputText, onChangeInput, onBlur } = useInput({ initialVal, getInputText, setFunc });

  return (
    <TextAreaCss
      colortype={colortype}
      value={value ?? inputText}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChangeInput}
      onBlur={onBlur}
      className={className}
    />
  );
};
export default TextArea;
