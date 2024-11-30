import OtherButtonComponent from './indexCss';

interface OtherButtonProps extends React.ComponentProps<typeof OtherButtonComponent> {
  onClick?: () => void; // 버튼 클릭 이벤트 핸들러
  label: string; // 버튼에 표시될 텍스트
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  bgColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  disabled?: boolean;
}

const OtherButton = ({
  onClick = () => {},
  label,
  width,
  height,
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
      $width={width}
      $height={height}
      $border={border}
      $borderRadius={borderRadius}
      $bgColor={bgColor}
      $color={color}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      disabled={disabled}>
      {label}
    </OtherButtonComponent>
  );
};

export default OtherButton;
