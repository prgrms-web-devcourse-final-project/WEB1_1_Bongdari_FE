import Theme from '@/styles/theme';
import styled from 'styled-components';

export const InterestCenterBoxCss = styled.div`
  background-color: ${Theme.box.section.backgroundColor};
  border: ${Theme.box.section.border};
  border-radius: ${Theme.box.section.borderRadius};

  width: 160px;
  height: 200px;
  flex-shrink: 0; // 너비 줄어들지 못하도록
  padding: 0 10px;

  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  overflow: hidden; // 박스에서 넘치는 내용 숨김

  & > img {
    width: 85px;
    height: 85px;
    border-radius: 50%;
    background-color: #d9d9d9;

    object-fit: contain;
  }

  & > p {
    color: black;
    text-align: center;
    white-space: normal; // 기본 줄바꿈 허용
    font-size: ${Theme.fontSize.seventhSize};
    font-weight: 400;
  }
`;
