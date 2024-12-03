import { Wrapper } from './PersonalMyPageCss';
import { personProfileType } from '@/shared/types/person-profile/personProfile';
import EditProfile from '@/features/personal-my-page-feature/_components/edit-profile';
import HalfList from '@/features/personal-my-page-feature/_components/half-list';
import HeartedOrg from '@/features/personal-my-page-feature/_components/heart-org-list';
import ReviewList from '@/features/personal-my-page-feature/_components/review-list';

const PersonalMyPage = () => {
  const tmpdata: personProfileType = {
    volunteer_id: '??',
    nickname: 'jooyoung',
    img_url: '',
    introduce:
      '나의 소개입니다! 나의 소개입니다! 나의 소개입니다! 나의 소개입니다! 나의 소개입니다! 나의 소개입니다! 나의 소개입니다!',
    tier: 'red',
    total_volunteer_hours: 120,
    total_volunteer_count: 9,
    detail: {
      name: '김주영',
      email: 'djm06294@naver.com',
      gender: 'female',
      birthDate: '1999-03-01',
      contactNumber: '010-1222-2222'
    }
  };
  return (
    <Wrapper>
      <div className="innerWrap">
        <i className="sayHi">안녕하세요, {tmpdata.detail.name}님!</i>
        <EditProfile
          profileImg={tmpdata.img_url}
          profileNickname={tmpdata.nickname}
          profileDescripton={tmpdata.introduce}
        />
        <div className="halfListWrap">
          <HalfList user_id={tmpdata.volunteer_id} listType="myVolunteer" />
          <HalfList user_id={tmpdata.volunteer_id} listType="myMessage" />
        </div>
        <HeartedOrg user_id={tmpdata.volunteer_id} />
        <ReviewList user_id={tmpdata.volunteer_id} />
      </div>
    </Wrapper>
  );
};
export default PersonalMyPage;
