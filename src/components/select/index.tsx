import { Box, OptionPlaceholder } from './indexCss';

interface SelectProps {
  text: string;
  width?: string;
  height?: string;
  data: string[];
}

const Select: React.FC<SelectProps> = ({ text, width = '325px', height = '56px', data }) => {
  return (
    <Box width={width} height={height}>
      <OptionPlaceholder value="" disabled selected>
        {text}
      </OptionPlaceholder>
      {data.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </Box>
  );
};

export default Select;
