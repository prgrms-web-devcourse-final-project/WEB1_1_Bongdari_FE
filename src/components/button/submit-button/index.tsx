import SubmitButtonComponent from './indexCss';

interface SubmitButtonProps extends React.ComponentProps<typeof SubmitButtonComponent> {
  onClick?: () => void; // 버튼 클릭 이벤트 핸들러
  label: string; // 버튼에 표시될 텍스트
  variant?: 'disabled' | 'enabledOne' | 'enabledTwo'; // 버튼 스타일을 위한 variant
}

const SubmitButton = ({
  onClick,
  label,
  variant = 'enabledOne',
  width,
  fontSize,
  fontWeight,
  disabled = false
}: SubmitButtonProps) => {
  return (
    <SubmitButtonComponent
      onClick={onClick}
      variant={variant}
      width={width}
      fontSize={fontSize}
      fontWeight={fontWeight}
      disabled={disabled}>
      {label}
    </SubmitButtonComponent>
  );
};

export default SubmitButton;
