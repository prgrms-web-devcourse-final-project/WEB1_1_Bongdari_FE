import TextAreaCss from './indexCss';
import { useInput } from './logic/useInput';

interface TextAreaProps {
  getInputText: (inputText: string) => void; // inputText 상위전달
  colortype: 0 | 1; // 색상 타입
  width: string;
  height?: string;
  initialVal?: string; // input내의 초깃값
  placeholder?: string; // input의 placeholder
  isDisabled?: boolean;
  setFunc?: (inputText: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  getInputText,
  colortype = 0,
  width,
  height = '',
  initialVal = '',
  placeholder = '작성하세요.',
  isDisabled = false,
  setFunc
}: TextAreaProps) => {
  const { inputText, onChangeInput, onBlur } = useInput({ initialVal, getInputText, setFunc });

  return (
    <TextAreaCss
      width={width}
      height={height}
      colortype={colortype}
      value={inputText}
      placeholder={placeholder}
      onChange={onChangeInput}
      onBlur={onBlur}
      disabled={isDisabled}
    />
  );
};
export default TextArea;
