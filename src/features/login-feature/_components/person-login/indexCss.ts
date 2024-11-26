import Theme from '@/styles/theme';
import styled from 'styled-components';

export const PersonLoginCss = styled.div`
  width: 100%;

  font-size: ${Theme.fontSize.seventhSize};
  font-weight: 600;
  color: #383838;

  .naverLoginBtn {
    width: 100%;
    height: 80px;
    margin: 100px 0;
    background-color: ${Theme.box.section.backgroundColor};
    border: ${Theme.box.section.border};
    border-radius: ${Theme.box.section.borderRadius};

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    cursor: pointer;
  }
  .naverLoginBtn img {
    width: 45px;
    height: 45px;
    object-fit: contain;
    background-color: transparent;

    position: absolute;
    left: 15px;
  }
  .naverLoginBtn i {
    font-size: ${Theme.fontSize.seventhSize};
    font-weight: 600;
    color: #383838;
  }
`;
