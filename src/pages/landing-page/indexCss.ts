import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  padding-top: 180px;
  padding-bottom: 100px;
  height: 960px;
  margin: 0 auto;
`;

export const Visual = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 420px;

  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Title = styled.div`
  & > h2 {
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    line-height: 50px;
    padding-top: 50px;
    padding-bottom: 15px;
    & > span {
      color: #2382ff;
    }
  }
  & > p {
    text-align: center;
    font-size: 18px;
    color: #7c7c7c;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;

  & button {
    width: 220px;
    height: 53px;
    border-radius: 12px;
    background-color: #2382ff;
    color: white;
    font-weight: 600;
    border: none;
    outline: none;
    transition: 0.2s;

    &:hover {
      background-color: #0a66de;
      cursor: pointer;
    }
  }
`;
