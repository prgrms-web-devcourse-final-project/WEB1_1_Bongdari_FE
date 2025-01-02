import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  width: 50%;
  height: 230px;
  flex: 0 0 calc(50% - 5px);
  background-color: white;
`;

export const Top = styled.div`
  width: 100%;
  flex: 1;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Users = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  &:hover .remainingUsersWrap {
    display: flex;
  }
`;

export const DisplayUser = styled.div`
  font-size: 14px;
  display: inline-block;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  padding: 4px 8px;

  & > p {
    font-weight: 600;
  }

  & > a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
  }
`;

export const RemainingUsers = styled.div`
  position: absolute;
  top: 25px;
  width: 100%;
  left: 0;
  right: 0;

  .remainingUsersWrap {
    border: 1px solid #e3e3e3;
    border-radius: 8px;
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    z-index: 100 !important;
    display: none;
    isolation: isolate; /* 스태킹 컨텍스트를 강제 생성 */
  }

  .remainingUsersWrap > * {
    border-bottom: 1px solid #e3e3e3;
    padding: 8px;
    text-align: center;
    text-decoration: none;
    color: black;
  }
`;

export const GloveImg = styled.img`
  width: 13px;
  height: 13px;
  object-fit: contain;
  margin-left: 5px;
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
