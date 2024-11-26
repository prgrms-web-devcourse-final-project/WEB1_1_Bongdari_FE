import styled from 'styled-components';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  background-color: white;
  margin-top: 10px;

  & > div:nth-of-type(1) {
    padding: 50px;
    border-bottom: 1px solid #d1d1d1;
  }
`;

export const Text = styled.p`
  color: #535353;
  line-height: 24px;
`;

export const RecruitCount = styled.p`
  color: #292929;
  height: 82px;
  line-height: 82px;
  padding-left: 50px;
`;
