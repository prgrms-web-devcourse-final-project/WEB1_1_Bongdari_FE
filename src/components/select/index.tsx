import { Box, OptionPlaceholder } from './indexCss';

interface SelectProps {
  text: string;
  width?: string;
  height?: string;
  data: string[];
  getSelectedOption: (selected: string) => void;
}

const Select: React.FC<SelectProps> = ({ text, width = '325px', height = '56px', data, getSelectedOption }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    getSelectedOption(e.target.value);
  };

  return (
    <Box $width={width} $height={height} onChange={handleChange} defaultValue="">
      <OptionPlaceholder value="" disabled>
        {text}
      </OptionPlaceholder>
      {data.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </Box>
  );
};

export default Select;
