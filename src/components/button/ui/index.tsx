import ButtonComponent from './indexCss';

interface ButtonProps {
  onClick: () => void; // 버튼 클릭 이벤트 핸들러
  label: string; // 버튼에 표시될 텍스트
  border: string;
  borderRadius: string;
  fontSize: string;
  bgColor: string;
  color: string;
  width: string;
  height?: string;
  disabled?: boolean;
}

const Button = ({
  onClick,
  label,
  border,
  borderRadius,
  bgColor,
  disabled = false,
  width,
  height,
  fontSize,
  color
}: ButtonProps) => {
  return (
    <ButtonComponent
      onClick={onClick}
      border={border}
      borderRadius={borderRadius}
      bgColor={bgColor}
      disabled={disabled}
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}>
      {label}
    </ButtonComponent>
  );
};

export default Button;
