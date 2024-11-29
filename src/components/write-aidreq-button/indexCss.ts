import theme from '@/styles/theme';
import styled from 'styled-components';

export const SectionBox = styled.div`
  width: 100%;
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};
  padding: 39px 250px;
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0 15px 0;
`;

export const IconBox = styled.div`
  width: 57px;
  height: 57px;
  border-radius: 15px;
  padding: 12px;
  overflow: hidden;
  border: 1px solid #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

export const IntroTitle = styled.p`
  font-size: ${theme.fontSize.fifthSize};
  font-weight: 700;
  color: #252525;
`;

export const IntroSubTitle = styled.p`
  font-size: ${theme.fontSize.seventhSize};
  color: #939393;
`;

export const WritingButton = styled.button`
  width: 237px;
  height: 57px;
  border: 1px solid ${theme.pointColor.event};
  border-radius: 10px;
  background-color: #ffffff;
  color: ${theme.pointColor.event};
  font-size: ${theme.fontSize.seventhSize};
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s;
  margin-left: 2rem;

  &:active {
    color: ${theme.pointColor.clicked};
    border: 1px solid ${theme.pointColor.clicked};
  }
`;
