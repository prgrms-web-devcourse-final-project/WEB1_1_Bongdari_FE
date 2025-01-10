import Button from '@/components/button';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 11px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SectionBox3 = styled.div`
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: ${theme.box.section.backgroundColor};
  margin: 20px 0 29px 0;
  display: flex;
  padding: 47px 49px 49px 46px;
  max-height: 153px;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1rem;
    padding: 35px 52px 22px 52px;
    max-height: 100%;
  }
`;

export const Title = styled.p`
  font-size: ${theme.fontSize.fourthSize};
  font-weight: 700;
  padding-left: 8px;

  @media (max-width: 1000px) {
    font-size: ${theme.fontSize.sixthSize};
  }
`;

export const DateInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-right: 1px solid #d1d1d1;
  padding: 39px 36px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const EmptyButton = styled(Button)`
  width: 221px;
  height: 53px;
  border-radius: 13px;
  font-size: ${theme.fontSize.eighthSize};
  font-weight: 600;
  transition: 0.3s;

  @media (max-width: 1000px) {
    width: 261px;
    height: 50px;
    border-radius: 12px;
  }
`;
