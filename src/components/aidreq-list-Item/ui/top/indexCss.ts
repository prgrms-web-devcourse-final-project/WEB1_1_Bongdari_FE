import styled from 'styled-components';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  border-bottom: 1px solid #d1d1d1;
  padding: 2rem 2rem 1.5rem 2rem;
`;

export const LabelContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const Title = styled.p`
  font-size: ${theme.fontSize.thirdSize};
  font-weight: 700;
  margin: 1rem 0;
  height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Text = styled.p`
  font-size: ${theme.fontSize.eighthSize};
  font-weight: 400;
  color: #535353;
  height: 28px;
  overflow: hidden;
`;

export const Center = styled.p`
  font-size: ${theme.fontSize.eighthSize};
  font-weight: 300;
  color: #808080;
  margin-top: 1rem;
`;
