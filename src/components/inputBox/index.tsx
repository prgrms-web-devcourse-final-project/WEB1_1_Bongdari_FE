import InputBoxCss from './indexCss';
import { useInput } from './logic/useInput';

interface InputCompProps {
  getInputText: (inputText: string) => void; // inputText 상위전달
  colortype: 0 | 1; // 색상 타입
  textType?: 'text' | 'password' | 'url';
  width: string;
  height?: string;
  initialVal?: string; // input내의 초깃값
  placeholder?: string; // input의 placeholder
  isDisabled?: boolean;
  setFunc?: (inputText: string) => void; // 상위의 set함수
  onEnterFunc?: () => void;
  value?: string;
  borderRadius?: string;
}

const InputBox: React.FC<InputCompProps> = ({
  getInputText,
  colortype,
  textType = 'text',
  width,
  height = '',
  initialVal = '',
  placeholder = '작성하세요.',
  isDisabled = false,
  setFunc,
  onEnterFunc,
  value
}: InputCompProps) => {
  const { inputText, onChangeInput, onEnter, onBlur } = useInput({ initialVal, getInputText, setFunc, onEnterFunc });

  return (
    <InputBoxCss
      width={width}
      height={height}
      colortype={colortype}
      type={textType}
      value={value ?? inputText}
      placeholder={placeholder}
      onChange={onChangeInput}
      onKeyDown={onEnter}
      onBlur={onBlur}
      disabled={isDisabled}
    />
  );
};
export default InputBox;
