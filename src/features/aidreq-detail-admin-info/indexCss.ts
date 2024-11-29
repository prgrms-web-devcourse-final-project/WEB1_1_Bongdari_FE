import theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 11px;
`;

export const SectionBox = styled.div`
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};
  margin: 20px 0 29px 0;
`;

export const SectionBox2 = styled.div`
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};
  margin: 20px 0 29px 0;
  display: flex;
`;

export const Title = styled.p`
  font-size: ${theme.fontSize.fourthSize};
  font-weight: 700;
`;

export const DateInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-right: 1px solid #d1d1d1;
`;

export const DateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const DateTag = styled.div`
  border: 1px solid #cdcdcd;
  border-radius: 38px;
  color: #696969;
  font-size: ${theme.fontSize.eighthSize};
  padding: 6px 18px;
`;

export const TimeInfo = styled.p`
  color: #696969;
  font-size: ${theme.fontSize.seventhSize};
`;

export const EmptyButton = styled.button`
  width: 221px;
  height: 53px;
  border: 1px solid ${theme.pointColor.event};
  border-radius: 13px;
  background-color: #ffffff;
  color: ${theme.pointColor.event};
  font-size: ${theme.fontSize.eighthSize};
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;

  &:active {
    color: ${theme.pointColor.clicked};
    border: 1px solid ${theme.pointColor.clicked};
  }
`;
