import { Box, OptionPlaceholder } from './indexCss';

interface SelectProps {
  text: string;
  width?: string;
  height?: string;
  data: string[];
  initialValue?: string;
  getSelectedOption: (selected: string) => void;
}

const Select: React.FC<SelectProps> = ({
  text,
  width = '325px',
  height = '56px',
  data,
  initialValue,
  getSelectedOption
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    getSelectedOption(e.target.value);
  };

  return (
    <Box width={width} height={height} onChange={handleChange}>
      <OptionPlaceholder value="" disabled selected={!initialValue}>
        {text}
      </OptionPlaceholder>
      {data.map((item, index) => (
        <option key={index} selected={!!initialValue && item === initialValue}>
          {item}
        </option>
      ))}
    </Box>
  );
};

export default Select;
