import theme from '@/styles/theme';
import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
  margin-bottom: 40px;
`;

export const DescriptionTitle = styled.h1`
  font-size: ${theme.fontSize.secondSize};
  font-weight: 600;
  margin-bottom: 40px;
`;

export const SectionBox = styled.ul`
  border: ${theme.box.section.border};
  background-color: ${theme.box.section.backgroundColor};
  border-radius: ${theme.box.section.borderRadius};

  display: flex;
  gap: 58px;
  padding: 52px 128px;
  margin: 5px 0;
`;

export const DescriptionItem = styled.li`
  width: 192px;
  height: 192px;
  border-radius: 50%;
  border: 1px solid ${theme.pointColor.event};
`;

export const Circle = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 1px solid #c5deff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px auto;
`;

export const Text = styled.p`
  text-align: center;
`;

export const Description = styled.p`
  color: #484848;
  line-height: 1.5;
`;
