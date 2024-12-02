import theme from '@/styles/theme';
import styled from 'styled-components';

export const WriterProfileBoxCss = styled.div`
  background-color: ${theme.box.section.backgroundColor};
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 35px;

  .infoWrap {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .infoWrap .profileImg {
    background-color: #b3b3b3;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  .infoWrap .nickname {
    font-size: ${theme.fontSize.fifthSize};
    font-weight: 600;
  }
  .infoWrap .tier {
    width: ${theme.fontSize.fourthSize};
    height: ${theme.fontSize.fourthSize};
    object-fit: contain;
    transform: rotateZ(30deg);
  }
`;
