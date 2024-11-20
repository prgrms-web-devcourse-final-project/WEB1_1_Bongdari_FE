import TabButtonComponent from './indexCss';

type StyledTabButtonProps = {
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  bgColor?: string;
  color?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
};

type TabButtonProps = StyledTabButtonProps & {
  onClick: () => void; // 버튼 클릭 이벤트 핸들러
  label: string; // 버튼에 표시될 텍스트
};

const TabButton = ({
  onClick,
  label,
  border = '1px solid #DFDFDF',
  borderRadius = '10px',
  fontSize = '16px',
  bgColor = '#2382FF',
  color = '#848484',
  width = '167px',
  height = '47px',
  disabled
}: TabButtonProps) => {
  return (
    <TabButtonComponent
      onClick={onClick}
      border={border}
      borderRadius={borderRadius}
      bgColor={bgColor}
      disabled={disabled}
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}>
      {label}
    </TabButtonComponent>
  );
};

export default TabButton;
