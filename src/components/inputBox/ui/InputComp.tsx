import InputCompCss from './InputCompCss';
import { useInput } from '../logic/useInput';

interface InputCompProps {
  width: string;
  height?: string;
  initialVal?: string;
}

const InputComp: React.FC<InputCompProps> = ({ width, height, initialVal }: InputCompProps) => {
  const { inputText, onChangeInput, onEnter } = useInput({ initialVal });

  return (
    <InputCompCss width={width} height={height ?? ''}>
      <input type="text" value={inputText} placeholder="작성하세요." onChange={onChangeInput} onKeyDown={onEnter} />
    </InputCompCss>
  );
};
export default InputComp;
