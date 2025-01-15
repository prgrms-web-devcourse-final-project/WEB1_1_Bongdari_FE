import { useState, useEffect, useRef } from 'react';
import { Arrow, Box, List, ListItem } from './indexCss';

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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialValue || text);
  const selectRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (item: string) => {
    setSelectedOption(item);
    getSelectedOption(item);
    setIsOpen(false);
  };

  return (
    <Box ref={selectRef} width={width} height={height} $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      {selectedOption}
      <Arrow>
        <img src="/assets/imgs/select-arrow.svg" alt=""></img>
      </Arrow>
      <List $isOpen={isOpen}>
        {data.map((item, index) => (
          <ListItem
            key={index}
            $isSelected={item === selectedOption}
            onClick={(e) => {
              e.stopPropagation();
              handleOptionClick(item);
            }}>
            {item}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Select;
