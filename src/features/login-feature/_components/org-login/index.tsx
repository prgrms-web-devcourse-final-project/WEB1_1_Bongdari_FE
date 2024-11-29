import { OrgLoginCss } from './indexCss';
import { SubmitButton } from '@/components/button';
import InputBox from '@/components/inputBox';
import { useOrgLogin } from './logic/useOrgLogin';

const OrgLogin = () => {
  const { idErr, pwdErr, checkId, checkPwd, onClickFindAcount, onClickLogin, onClickFirstVisit } = useOrgLogin();
  return (
    <OrgLoginCss>
      <div className="inputWrap">
        <i className="label">아이디</i>

        <InputBox
          colortype={0}
          width="100%"
          height="60px"
          placeholder="아이디를 입력해주세요."
          getInputText={checkId} // 필요 없는데 필수props라서 넣어줌
          setFunc={checkId}
        />
        <i className="checkErr">{idErr}</i>
      </div>
      <div className="inputWrap">
        <i className="label">비밀번호</i>
        <InputBox
          colortype={0}
          width="100%"
          height="60px"
          textType="password"
          placeholder="비밀번호를 입력해주세요."
          getInputText={checkPwd} // 필요 없는데 필수props라서 넣어줌
          setFunc={checkPwd}
        />
        <i className="checkErr">{pwdErr}</i>
      </div>
      <div className="btnWrap">
        <button className="findAccountBtn" onClick={onClickFindAcount}>
          계정 찾기
        </button>
        <SubmitButton label="로그인" width="49%" height="55px" onClick={onClickLogin} />
      </div>
      <button className="firstVisitBtn" onClick={onClickFirstVisit}>
        첫방문이신가요?
      </button>
    </OrgLoginCss>
  );
};
export default OrgLogin;
