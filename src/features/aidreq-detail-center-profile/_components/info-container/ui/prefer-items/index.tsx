import { Item } from './indexCss';

interface PreferItemProps {
  label: string;
}

const PreferItem: React.FC<PreferItemProps> = ({ label }) => {
  return <Item>{label}</Item>;
};

export default PreferItem;
