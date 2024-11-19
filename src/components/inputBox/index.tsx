import InputBoxCss from './indexCss';
import { useInput } from './logic/useInput';

interface InputCompProps {
  getInputText: (inputText: string) => void; // inputText 상위전달
  colortype: boolean; // 색상 타입
  borderradius?: '8px' | '12px';
  width: string;
  height?: string;
  initialVal?: string; // input내의 초깃값
  placeholder?: string; // input의 placeholder
}

const InputBox: React.FC<InputCompProps> = ({
  getInputText,
  colortype,
  borderradius = '8px',
  width,
  height = '',
  initialVal = '',
  placeholder = '작성하세요.'
}: InputCompProps) => {
  const { inputText, onChangeInput, onEnter, onBlur } = useInput({ initialVal, getInputText });

  return (
    <InputBoxCss
      width={width}
      height={height}
      borderradius={borderradius}
      colortype={colortype}
      type="text"
      value={inputText}
      placeholder={placeholder}
      onChange={onChangeInput}
      onKeyDown={onEnter}
      onBlur={onBlur}
    />
  );
};
export default InputBox;
