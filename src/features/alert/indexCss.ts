import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(0, 100%);
  width: 500px;
  padding: 1rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 400px;
  background-color: white;
  border: 1px solid #dfdfdf;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  & > p {
    font-size: 20px;
    font-weight: 700;
  }

  & > span {
    font-size: 14px;

    &:hover {
      cursor: pointer;
    }
  }
`;
