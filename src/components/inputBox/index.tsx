import InputBoxCss from './indexCss';
import { useInput } from './logic/useInput';

interface InputCompProps {
  getInputText: (inputText: string) => void; // inputText 상위전달
  colortype: boolean; // 색상 타입
  width: string;
  height?: string;
  initialVal?: string; // input내의 초깃값
  placeholder?: string; // input의 placeholder
}

const InputBox: React.FC<InputCompProps> = ({
  getInputText,
  colortype,
  width,
  height,
  initialVal,
  placeholder
}: InputCompProps) => {
  const { inputText, onChangeInput, onEnter, onBlur } = useInput({ initialVal, getInputText });

  return (
    <InputBoxCss
      width={width}
      height={height ?? ''}
      colortype={colortype}
      type="text"
      value={inputText}
      placeholder={placeholder ?? '작성하세요.'}
      onChange={onChangeInput}
      onKeyDown={onEnter}
      onBlur={onBlur}
    />
  );
};
export default InputBox;
