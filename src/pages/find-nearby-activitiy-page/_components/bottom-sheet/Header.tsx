import styled from 'styled-components';

const Wrapper = styled.div`
  height: 24x;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 12px;
  position: relative;
  padding: 12px 0 4px 0;
  cursor: pointer;
`;

const Handle = styled.div`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background-color: #dee2e6;
  margin: auto;
`;

interface HeaderProps {
  onClick: () => void;
  className?: string;
}

const Header = ({ onClick, className }: HeaderProps) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      <Handle />
    </Wrapper>
  );
};

export default Header;
