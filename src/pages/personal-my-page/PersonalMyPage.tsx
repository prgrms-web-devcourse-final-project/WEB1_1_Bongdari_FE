import { Wrapper } from './PersonalMyPageCss';
import { myProfileType } from '@/shared/types/person-profile/personProfile';
import EditProfile from '@/features/personal-my-page-feature/_components/edit-profile';
import HalfList from '@/features/personal-my-page-feature/_components/half-list';
import HeartedOrg from '@/features/personal-my-page-feature/_components/heart-org-list';
import ReviewList from '@/features/personal-my-page-feature/_components/review-list';

const PersonalMyPage = () => {
  const tmpdata: myProfileType = {
    nickname: 'jooyoung',
    imgUrl: '',
    introduce:
      '나의 소개입니다! 나의 소개입니다! 나의 소개입니다! 나의 소개입니다! 나의 소개입니다! 나의 소개입니다! 나의 소개입니다!',
    tier: 'red',
    totalVolunteerHours: 120,
    totalVolunteerCount: 9,
    details: {
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
        <i className="sayHi">안녕하세요, {tmpdata.details.name}님!</i>
        <EditProfile
          profileImg={tmpdata.imgUrl}
          profileNickname={tmpdata.nickname}
          profileDescripton={tmpdata.introduce}
        />
        <div className="halfListWrap">
          <HalfList user_id={tmpdata.nickname} listType="myVolunteer" />
          <HalfList user_id={tmpdata.nickname} listType="myMessage" />
        </div>
        <HeartedOrg user_id={tmpdata.nickname} />
        <ReviewList user_id={tmpdata.nickname} />
      </div>
    </Wrapper>
  );
};
export default PersonalMyPage;
