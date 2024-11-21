import TabButtonComponent from './indexCss';

interface TabButtonProps extends React.ComponentProps<typeof TabButtonComponent> {
  onClick?: () => void; // 버튼 클릭 이벤트 핸들러
  label: string; // 버튼에 표시될 텍스트
  variant?: 'clicked' | 'notClicked';
}

const TabButton = ({ onClick, label, variant = 'notClicked', width, fontSize, fontWeight }: TabButtonProps) => {
  return (
    <TabButtonComponent onClick={onClick} variant={variant} width={width} fontSize={fontSize} fontWeight={fontWeight}>
      {label}
    </TabButtonComponent>
  );
};

export default TabButton;
