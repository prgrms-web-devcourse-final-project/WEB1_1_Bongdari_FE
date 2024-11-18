import InputComp from './ui/InputComp';

interface InputBoxProps {
  width: string;
  height?: string;
}

const InputBox: React.FC<InputBoxProps> = ({ width, height }) => {
  const inputProps = {
    width,
    ...(height && { height }) // height이 있을 때만 포함
  };

  return <InputComp {...inputProps} />;
  //   return <InputComp width={width} {...(height ? { height } : {})} />;
  // 또 다른 방법
};
export default InputBox;
