import OtherButtonComponent from './indexCss';

interface OtherButtonProps extends React.ComponentProps<typeof OtherButtonComponent> {
  onClick?: () => void; // 버튼 클릭 이벤트 핸들러
  label: string; // 버튼에 표시될 텍스트
}

const OtherButton = ({
  onClick = () => {},
  label,
  width,
  border,
  borderRadius,
  bgColor,
  color,
  fontSize,
  fontWeight,
  disabled = false
}: OtherButtonProps) => {
  return (
    <OtherButtonComponent
      onClick={onClick}
      width={width}
      border={border}
      borderRadius={borderRadius}
      bgColor={bgColor}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      disabled={disabled}>
      {label}
    </OtherButtonComponent>
  );
};

export default OtherButton;
