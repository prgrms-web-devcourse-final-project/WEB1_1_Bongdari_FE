import ButtonComponent from './indexCss';

interface ButtonProps {
  onClick?: () => void;
  label?: string;
  disabled?: boolean;
  type?: 'blue' | 'white';
  buttonType?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: React.ReactNode;
}

const Button = ({
  onClick = () => {},
  label,
  disabled = false,
  type = 'blue',
  buttonType = 'button',
  className,
  children
}: ButtonProps) => {
  return (
    <ButtonComponent onClick={onClick} disabled={disabled} $type={type} type={buttonType} className={className}>
      {children}
      <span>{label}</span>
    </ButtonComponent>
  );
};

export default Button;
