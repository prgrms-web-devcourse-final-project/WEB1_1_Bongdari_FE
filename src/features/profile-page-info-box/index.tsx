import React from 'react';
import { ProfileInfoBoxCss } from './indexCss';
import { personProfileType } from '@/shared/types/person-profile/personProfile';

interface ProfileInfoBoxProps extends personProfileType {
  user_id: string;
}

const ProfileInfoBox: React.FC<ProfileInfoBoxProps> = ({
  user_id,
  nickname,
  totalVolunteerHours,
  totalVolunteerCount,
  tier,
  introduce
}) => {
  return (
    <ProfileInfoBoxCss id={user_id}>
      <p className="blueTitle">상세정보</p>
      <p className="info">
        <i className="label">닉네임</i>
        <i className="data">{nickname}</i>
      </p>
      <p className="info">
        <i className="label rightLabel">총 봉사 시간</i>
        <i className="data">{totalVolunteerHours}시간</i>
      </p>
      <p className="info">
        <i className="label">등급</i>
        <img src={`/assets/imgs/mitten-${tier}.svg`} className="data" />
      </p>
      <p className="info">
        <i className="label rightLabel">총 봉사 횟수</i>
        <i className="data">{totalVolunteerCount}회</i>
      </p>
      <p className="info wide">
        <i className="label ">설명</i>
        <i className="data">{introduce}</i>
      </p>
    </ProfileInfoBoxCss>
  );
};
export default ProfileInfoBox;
