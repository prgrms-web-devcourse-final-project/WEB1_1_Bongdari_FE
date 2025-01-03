import ButtonComponent from './indexCss';

interface ButtonProps {
  onClick?: () => void;
  label?: string;
  disabled?: boolean;
  type?: 'blue' | 'white';
  buttonType?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: React.ReactNode;
  isActive?: boolean;
}

const Button = ({
  onClick = () => {},
  label,
  disabled = false,
  type = 'blue',
  buttonType = 'button',
  className,
  children,
  isActive
}: ButtonProps) => {
  return (
    <ButtonComponent
      onClick={onClick}
      disabled={disabled}
      $type={type}
      type={buttonType}
      className={className}
      $isActive={isActive}>
      {children}
      <span>{label}</span>
    </ButtonComponent>
  );
};

export default Button;
