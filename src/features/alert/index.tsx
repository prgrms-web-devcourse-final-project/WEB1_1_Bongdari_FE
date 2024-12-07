import { useEffect, useState } from 'react';

import AlertItem from '@/components/alert-item';
import { Container, Top, Wrapper } from './indexCss';
import { AlertType } from '@/shared/types/alert-type/AlertType';
import { sigleRead } from './logic/single-read';
import axiosInstance from '@/api/apis';

const Alert = () => {
  const [notifications, setNotifications] = useState<AlertType[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axiosInstance(`/api/notification/unread`);
        const data = await response.data;
        setNotifications(data); // data형식 보고 이부분 수정해야함
      } catch (error) {
        console.error('알림을 가져오는데 실패했습니다:', error);
      }
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    console.log('notifications', notifications);
  }, [notifications]);

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
          <span>전체 삭제하기</span>
        </Top>
        {data.map((item) => (
          <AlertItem key={item.id} item={item} sigleRead={sigleRead}></AlertItem>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Alert;
