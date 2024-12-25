import ButtonComponent from './indexCss';

interface ButtonProps {
  onClick?: () => void;
  label: string;
  disabled?: boolean;
  type?: 'blue' | 'white';
  className?: string;
}

const Button = ({ onClick = () => {}, label, disabled = false, type = 'blue', className }: ButtonProps) => {
  return (
    <ButtonComponent onClick={onClick} disabled={disabled} $type={type} className={className}>
      {label}
    </ButtonComponent>
  );
};

export default Button;
