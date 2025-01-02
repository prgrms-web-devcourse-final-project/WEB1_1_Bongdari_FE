import Button from '@/components/button';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  margin: auto;
  padding: 1rem;
`;

export const ScrollSection = styled.div`
  max-height: 100%;
  overflow-y: auto; // 세로 스크롤
  padding: 50px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: white;
    height: 50%;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const AdjustmentTitle = styled.p`
  font-size: ${theme.fontSize.fourthSize};
  font-weight: 600;
`;

export const AdjustmentSubTitle = styled.p`
  font-size: ${theme.fontSize.eighthSize};
  font-weight: 500;
  color: #989898;
`;

export const ApplicantList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px 12px;
  padding: 32px 0 42px 0;
`;

export const Applicant = styled.li`
  border: ${theme.box.section.border};
  background-color: ${theme.box.section.backgroundColor};
  border-radius: ${theme.box.section.borderRadius};
  padding: 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NameBox = styled.div`
  display: flex;
  gap: 17px;
`;

export const Name = styled.p`
  font-size: ${theme.fontSize.seventhSize};
`;

export const NickName = styled.p`
  font-size: ${theme.fontSize.eighthSize};
  color: #a4a4a4;
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const AdjustmentButton = styled(Button)`
  width: 163px;
  height: 48px;
  font-size: ${theme.fontSize.eighthSize};
  font-weight: 600;
  border-radius: 8px;
`;
