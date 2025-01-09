import React from 'react';
import { ProfileInfoBoxCss } from './indexCss';
import { personProfileType } from '@/shared/types/person-profile/personProfile';
import { centerProfileType } from '@/shared/types/center-profile/centerProfile';

type ProfileInfoBoxProps = ({ type: 'person' } & personProfileType) | ({ type: 'center' } & centerProfileType);

const ProfileInfoBox: React.FC<ProfileInfoBoxProps> = (props) => {
  // 타입 가드 함수 생성
  const isPersonProfile = (props: ProfileInfoBoxProps): props is { type: 'person' } & personProfileType => {
    return props.type === 'person';
  };

  if (isPersonProfile(props)) {
    const { volunteer_id, nickname, introduce, tier, total_volunteer_hours, total_volunteer_count } = props;

    return (
      <ProfileInfoBoxCss id={volunteer_id}>
        <p className="blueTitle">상세정보</p>
        <div className="leftInfoWrap">
          <p className="info">
            <i className="label volunteer">닉네임</i>
            <i className="data">{nickname}</i>
          </p>
          <p className="info">
            <i className="label volunteer">등급</i>
            <img src={`/assets/imgs/mitten-${tier.toLowerCase()}.svg`} className="data" />
          </p>
        </div>
        <div className="rightInfoWrap">
          <p className="info">
            <i className="label rightLabel volunteer">총 봉사 시간</i>
            <i className="data">{total_volunteer_hours}시간</i>
          </p>
          <p className="info">
            <i className="label rightLabel volunteer">총 봉사 횟수</i>
            <i className="data">{total_volunteer_count}회</i>
          </p>
        </div>
        <p className="info wide">
          <i className="label volunteer">설명</i>
          <i className="data">{introduce}</i>
        </p>
      </ProfileInfoBoxCss>
    );
  } else {
    const { center_id, name, contact_number, introduce } = props;
    return (
      <ProfileInfoBoxCss id={`${center_id}`}>
        <p className="blueTitle">상세정보</p>
        <p className="info">
          <i className="label">기관명</i>
          <i className="data">{name}</i>
        </p>
        <p className="info">
          <i className="label rightLabel">연락처</i>
          <i className="data">{contact_number}</i>
        </p>
        <p className="info wide">
          <i className="label ">설명</i>
          <i className="data">{introduce}</i>
        </p>
      </ProfileInfoBoxCss>
    );
  }
};
export default ProfileInfoBox;
