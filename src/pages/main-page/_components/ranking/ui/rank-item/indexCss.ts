import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  width: 50%;
  height: 230px;
  flex: 0 0 calc(50% - 5px);
`;

export const Top = styled.div`
  flex: 1;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const NickName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > span {
    font-size: 14px;
    display: inline-block;
    border: 1px solid #e3e3e3;
    border-radius: 8px;
    padding: 4px 8px;
    margin-right: 10px;
  }

  & > p {
    font-weight: 600;
  }
`;

export const Bottom = styled.div`
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    color: #2382ff;
    font-weight: 600;
  }
`;
