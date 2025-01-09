import theme from '@/styles/theme';
import styled from 'styled-components';
import Button from '@/components/button';

export const SectionBox = styled.div`
  width: 100%;
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};
  padding: 39px 0;
  display: flex;
  justify-content: center;
  margin: 20px 0 15px 0;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const IconBox = styled.div`
  width: 57px;
  height: 57px;
  border-radius: 15px;
  padding: 12px;
  margin-right: 20px;
  overflow: hidden;
  border: 1px solid #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;

export const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;

  @media (max-width: 1000px) {
    align-items: center;
  }
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

export const WritingButton = styled(Button)`
  width: 200px;
  height: 53px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  margin-left: 2rem;

  @media (max-width: 1000px) {
    margin: 28px 0 0 0;
  }
`;
