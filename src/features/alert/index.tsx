import AlertItem from '@/components/alert-item';
import { Container, Top, Wrapper } from './indexCss';

const Alert = () => {
  const data = [
    {
      id: 123,
      title: '{발신자:봉사자,기관} 님의 새 쪽지가 도착했습니다.',
      type: 'NOTE',
      relatedId: '1',
      read: false
    },
    {
      id: 124,
      title: '{수신자:봉사자} 님, 최근 활동하신 활동의 후기를 작성해주세요!',
      type: 'REVIEW',
      relatedId: '1',
      read: false
    },
    {
      id: 125,
      title: '{발신자:봉사자,기관} 님이 새로운 댓글을 작성하셨습니다.',
      type: 'COMMENT',
      relatedId: '1',
      read: false
    },
    {
      id: 127,
      title: '{발신자:기관} 님이 봉사 활동 신청을 승인하셨습니다.',
      type: 'RECRUIT',
      relatedId: '1',
      read: false
    },
    {
      id: 128,
      title: '{발신자:기관} 님이 봉사 활동 신청을 거절하셨습니다.',
      type: 'RECRUIT',
      relatedId: '1',
      read: false
    }
  ];

  return (
    <Wrapper>
      <Container>
        <Top>
          <p>알림</p>
          <span>전체 읽음처리 하기</span>
        </Top>
        {data.map((item) => (
          <AlertItem item={item}></AlertItem>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Alert;
