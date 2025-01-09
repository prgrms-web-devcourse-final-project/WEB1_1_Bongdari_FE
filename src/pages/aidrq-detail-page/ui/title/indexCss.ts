import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 10px;
`;

export const LabelBox = styled.div`
  display: flex;
  gap: 5px;
`;

export const TitleBox = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 65px;

  & > h2 {
    font-size: 36px;
    line-height: 46px;
    font-weight: 700;

    @media (max-width: 1000px) {
      font-size: 24px;
      line-height: 30px;
    }
  }
`;

export const CreatedAt = styled.p`
  font-size: 14px;
  color: #696969;
`;
