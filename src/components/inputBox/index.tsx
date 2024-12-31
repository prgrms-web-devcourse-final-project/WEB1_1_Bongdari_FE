import InputBoxCss from './indexCss';
import { useInput } from './logic/useInput';

interface InputCompProps {
  getInputText?: (inputText: string) => void; // inputText 상위전달
  colortype: 'white' | 'gray';
  textType?: 'text' | 'password' | 'url';
  disabled?: boolean;
  initialVal?: string; // input내의 초깃값
  placeholder?: string; // input의 placeholder
  value?: string; // input에 들어가는 value(변수)
  setFunc?: (inputText: string) => void; // 상위의 set함수
  onEnterFunc?: () => void;
}

const InputBox: React.FC<InputCompProps> = ({
  getInputText,
  colortype,
  textType = 'text',
  disabled = false,
  initialVal = '',
  placeholder = '작성하세요.',
  value,
  setFunc,
  onEnterFunc
}: InputCompProps) => {
  const { inputText, onChangeInput, onEnter, onBlur } = useInput({ initialVal, getInputText, setFunc, onEnterFunc });

  return (
    <InputBoxCss
      colortype={colortype}
      type={textType}
      disabled={disabled}
      value={value ?? inputText}
      placeholder={placeholder}
      onChange={onChangeInput}
      onKeyDown={onEnter}
      onBlur={onBlur}
    />
  );
};
export default InputBox;
