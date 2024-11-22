import { PPPG_Component2Css } from './indexCss';

const PPPG_Component2 = () => {
  return (
    <PPPG_Component2Css>
      <p className="blueTitle">상세정보</p>
      <p className="info">
        <i className="label ">닉네임</i>
        <i className="data">jooyoung</i>
      </p>
      <p className="info">
        <i className="label rightLabel">총 봉사 시간</i>
        <i className="data">1503시간</i>
      </p>
      <p className="info">
        <i className="label ">등급</i>
        <i className="data">장갑</i>
      </p>
      <p className="info">
        <i className="label rightLabel">총 봉사 횟수</i>
        <i className="data">200회</i>
      </p>
      <p className="info wide">
        <i className="label ">설명</i>
        <i className="data">해적왕이 되기 위하여 이 자리에 왔습니다.해적왕이 되기 위하여 이 자리에 왔습니다.</i>
      </p>
    </PPPG_Component2Css>
  );
};
export default PPPG_Component2;
