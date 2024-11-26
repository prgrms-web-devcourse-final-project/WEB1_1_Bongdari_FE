import React from 'react';
import { ProfileInfoBoxCss } from './indexCss';

interface ProfileInfoBoxProps {
  user_id: string;
  profileName: string;
  profileAidTime: number;
  profileAidCount: number;
  profileMitten: string;
  profileDescription?: string;
}
const ProfileInfoBox: React.FC<ProfileInfoBoxProps> = ({
  user_id,
  profileName,
  profileAidTime,
  profileAidCount,
  profileMitten,
  profileDescription
}) => {
  return (
    <ProfileInfoBoxCss id={user_id}>
      <p className="blueTitle">상세정보</p>
      <p className="info">
        <i className="label">닉네임</i>
        <i className="data">{profileName}</i>
      </p>
      <p className="info">
        <i className="label rightLabel">총 봉사 시간</i>
        <i className="data">{profileAidTime}시간</i>
      </p>
      <p className="info">
        <i className="label">등급</i>
        <img src={`/assets/imgs/mitten-${profileMitten}.svg`} className="data" />
      </p>
      <p className="info">
        <i className="label rightLabel">총 봉사 횟수</i>
        <i className="data">{profileAidCount}회</i>
      </p>
      <p className="info wide">
        <i className="label ">설명</i>
        <i className="data">{profileDescription}</i>
      </p>
    </ProfileInfoBoxCss>
  );
};
export default ProfileInfoBox;
