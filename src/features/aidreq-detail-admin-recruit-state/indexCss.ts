import Button from '@/components/button';
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
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const RecruitStateTitle = styled.p`
  font-size: ${theme.fontSize.fourthSize};
  font-weight: 700;

  @media (max-width: 1000px) {
    font-size: ${theme.fontSize.sixthSize};
  }
`;

export const RecruitStateButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
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

  & > img {
    display: block;
    margin: auto;
  }

  @media (max-width: 1000px) {
    flex: 1;
    padding: 10px;
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

  & > img {
    display: block;
    margin: auto;
  }

  @media (max-width: 1000px) {
    flex: 1;
    padding: 10px;
  }
`;

export const FinishedButton = styled.div<{ isActive?: boolean }>`
  background-color: ${({ isActive }) => (isActive ? '#FFE5CF' : theme.box.section.backgroundColor)};
  border: ${({ isActive }) => (isActive ? '1px solid #FFA680' : theme.box.section.border)};
  border-radius: ${theme.box.section.borderRadius};
  padding: 36px 114px 24px 113px;
  transition: 0.3s;

  & > img {
    display: block;
    margin: auto;
  }

  @media (max-width: 1000px) {
    flex: 1;
    padding: 7px;
  }
`;

export const StateText = styled.p`
  width: 100%;
  font-size: ${theme.fontSize.seventhSize};
  color: #656565;
  text-align: center;
  cursor: default;

  @media (max-width: 1000px) {
    position: relative;
    padding: 20px 0;
    font-size: ${theme.fontSize.eighthSize};

    &::before {
      content: '';
      position: absolute;
      top: 5px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 1px;
      background-color: #e3e3e3;
    }
  }
`;

export const NumberOfPeople = styled.span`
  font-size: 40px;
  font-weight: 600;
  color: ${theme.pointColor.event};

  @media (max-width: 1000px) {
    font-size: 30px;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const ApplyButton = styled(Button)`
  width: 221px;
  height: 53px;
  border-radius: 13px;
  font-size: 14px;
  font-weight: 600;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
