import theme from '@/styles/theme';
import styled from 'styled-components';

export const ProfilePreferItemBoxCss = styled.div`
  max-width: 720px;
  width: 100%;
  height: 50%;
  padding: 30px; // 여백 추가

  font-size: ${theme.fontSize.seventhSize};
  background-color: ${theme.box.section.backgroundColor};
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};

  .blueTitle {
    grid-column: 1/-1;
    color: ${theme.pointColor.Regular};
    font-size: ${theme.fontSize.sixthSize};
    font-weight: 600;
    margin-bottom: 20px;
  }

  .preferItemWrap {
    display: flex;
    gap: 10px;
  }
  .preferItemWrap .preferItem {
    color: #4a4a4a;
    font-weight: 600;
    font-size: ${theme.fontSize.seventhSize};
    background-color: ${theme.box.section.backgroundColor};
    border: ${theme.box.section.border};
    border-radius: ${theme.box.section.borderRadius};

    padding: 12px 20px;
  }
`;
