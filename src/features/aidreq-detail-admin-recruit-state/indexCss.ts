import theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 0 96px 0;
`;

export const StateContainer = styled.div`
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};
  padding: 10px 0 10px 10px;
  margin: 20px 0;
`;

export const RecruitStateTitle = styled.p`
  font-size: ${theme.fontSize.fourthSize};
  font-weight: 700;
`;

export const RecruitStateButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const RecruitingButton = styled.button<{ isActive?: boolean }>`
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#DFEDFF' : theme.box.section.backgroundColor)};
  border: ${({ isActive }) => (isActive ? '1px solid #71AEFF' : theme.box.section.border)};
  border-radius: ${theme.box.section.borderRadius};
  padding: 36px 114px 24px 113px;
  transition: 0.3s;

  &:hover {
    background-color: #f0f7ff;
  }
`;

export const RecruitedButton = styled.button<{ isActive?: boolean }>`
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#F4EBFF' : theme.box.section.backgroundColor)};
  border: ${({ isActive }) => (isActive ? '1px solid #CBA0FF' : theme.box.section.border)};
  border-radius: ${theme.box.section.borderRadius};
  padding: 36px 114px 24px 113px;
  transition: 0.3s;

  &:hover {
    background-color: #f7f1ff;
  }
`;

export const FinishedButton = styled.button<{ isActive?: boolean }>`
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#FFE5CF' : theme.box.section.backgroundColor)};
  border: ${({ isActive }) => (isActive ? '1px solid #FFA680' : theme.box.section.border)};
  border-radius: ${theme.box.section.borderRadius};
  padding: 36px 114px 24px 113px;
  transition: 0.3s;

  &:hover {
    background-color: #fff1e5;
  }
`;

export const StateText = styled.p`
  width: 100%;
  font-size: ${theme.fontSize.seventhSize};
  color: #656565;
  text-align: center;
  cursor: default;
`;

export const NumberOfPeople = styled.span`
  font-size: 40px;
  font-weight: 600;
  color: ${theme.pointColor.event};
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
