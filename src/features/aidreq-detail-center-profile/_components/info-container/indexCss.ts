import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 60px;
  flex: 1;
  position: relative;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const Site = styled.p`
  padding-top: 8px;
  font-size: 14px;
  color: #b6b6b6;
`;

export const Explain = styled.p`
  padding-top: 20px;
  color: #858585;
`;

export const PreferItemContainer = styled.div`
  padding-top: 30px;

  & > p {
    font-weight: 600;
    color: #2382ff;
    padding-bottom: 10px;
  }
`;
