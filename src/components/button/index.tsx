import ButtonComponent from './indexCss';

interface ButtonProps {
  onClick?: () => void;
  label?: string;
  disabled?: boolean;
  type?: 'blue' | 'white';
  className?: string;
  children?: React.ReactNode;
}

const Button = ({ onClick = () => {}, label, disabled = false, type = 'blue', className, children }: ButtonProps) => {
  return (
    <ButtonComponent onClick={onClick} disabled={disabled} $type={type} className={className}>
      <span>{label}</span>
      {children}
    </ButtonComponent>
  );
};

export default Button;
