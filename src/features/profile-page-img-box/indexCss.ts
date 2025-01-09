import Button from '@/components/button';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const ApplyButton = styled(Button)`
  max-width: 220px;
  width: 80%;
  height: 50px;

  font-size: ${theme.fontSize.eighthSize};
  border-radius: 13px;
`;

export const ProfileImgBoxCss = styled.div`
  max-width: 460px;
  width: 100%;
  min-width: 400px;
  min-height: 480px;
  height: 100%;

  background-color: ${theme.box.section.backgroundColor};
  border: ${theme.box.section.border};
  border-radius: ${theme.box.section.borderRadius};
  padding: 65px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: relative;

  @media (max-width: 1000px) {
    max-width: none;
    width: 100%;
  }

  & > img {
    background-color: #b3b3b3;
    object-fit: cover;
    border-radius: 190px;
    width: 190px;
    height: 190px;
  }

  p {
    text-align: center;
  }
  i {
    font-size: ${theme.fontSize.fourthSize};
    font-weight: 600;
    margin: 0 12px;
  }
  & > p > i:nth-of-type(2) {
    font-size: ${theme.fontSize.seventhSize};
    font-weight: 400;
    margin-top: 12px;
    color: #828282;
    display: block;
  }
  .mitten {
    width: ${theme.fontSize.fourthSize};
    height: ${theme.fontSize.fourthSize};
    object-fit: contain;
    transform: rotateZ(30deg);
  }
`;
