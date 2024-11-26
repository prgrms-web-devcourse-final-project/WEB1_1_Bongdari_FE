import React from 'react';
import { PPPG_Component1Css } from './indexCss';

interface PPPG_Component1Props {
  user_id: string;
  profileName: string;
  profileAidTime: number;
  profileAidCount: number;
  profileMitten: string;
  profileDescription?: string;
}
const PPPG_Component1: React.FC<PPPG_Component1Props> = ({
  user_id,
  profileName,
  profileAidTime,
  profileAidCount,
  profileMitten,
  profileDescription
}) => {
  return (
    <PPPG_Component1Css id={user_id}>
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
        <i className="data">{profileMitten}</i>
      </p>
      <p className="info">
        <i className="label rightLabel">총 봉사 횟수</i>
        <i className="data">{profileAidCount}회</i>
      </p>
      <p className="info wide">
        <i className="label ">설명</i>
        <i className="data">{profileDescription}</i>
      </p>
    </PPPG_Component1Css>
  );
};
export default PPPG_Component1;
