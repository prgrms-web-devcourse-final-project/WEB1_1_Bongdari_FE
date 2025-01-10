import styled from 'styled-components';
import Button from '@/components/button';

interface PresentResponse {
  status: string;
  attended: boolean;
}

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 250px 0;
`;

export const ButtonBox = styled.div<{ presentstate: PresentResponse | null; recstatus: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  gap: 10px;
  width: 440px;
  margin: auto;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ReviewBtn = styled(Button)`
  width: 100%;
  height: 53px;
  border-radius: 13px;
  font-size: 14px;
  font-weight: 600;
`;

export const ApplyBtn = styled(Button)`
  width: 100%;
  height: 53px;
  border-radius: 13px;
  font-size: 14px;
  font-weight: 600;
`;
