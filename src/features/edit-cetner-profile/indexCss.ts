import theme from '@/styles/theme';
import styled from 'styled-components';

export const CenterProfileEditContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;
`;

export const SectionBox = styled.section`
  border: ${theme.box.section.border};
  background-color: ${theme.box.section.backgroundColor};
  border-radius: ${theme.box.section.borderRadius};
  width: 100%;
  padding: 4rem 7rem 3rem 7rem;
`;

export const CenterProfileTitle = styled.h1`
  font-size: ${theme.fontSize.secondSize};
  font-weight: 600;
  width: 100%;
`;

export const ProfileEditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EditButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding-top: 4rem;
`;
