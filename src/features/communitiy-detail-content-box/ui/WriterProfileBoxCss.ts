import Button from '@/components/button';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const ApplyButton = styled(Button)`
  width: 220px;
  height: 50px;
  font-size: ${theme.fontSize.eighthSize};
  border-radius: 13px;

  @media (max-width: 1000px) {
    width: 200px;
    height: 40px;
  }
`;

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

  @media (max-width: 1000px) {
    height: 200px;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    border-radius: 25px;
  }
`;
