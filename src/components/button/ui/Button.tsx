import ButtonCss from './ButtonCss';

interface ButtonProps {
  label: string; // 버튼에 표시될 텍스트
  onClick: () => void; // 버튼 클릭 이벤트 핸들러
  bgColor?: 'default' | 'emphasize'; // 버튼 배경 색상
  disabled?: boolean; // 버튼 비활성화 여부
  width?: string; // 버튼 너비
  height?: string; // 버튼 높이!
}

const Button = ({ label, onClick, bgColor = 'default', disabled = false, width, height }: ButtonProps) => {
  return (
    <ButtonCss onClick={onClick} bgColor={bgColor} disabled={disabled} width={width} height={height}>
      {label}
    </ButtonCss>
  );
};

export default Button;
