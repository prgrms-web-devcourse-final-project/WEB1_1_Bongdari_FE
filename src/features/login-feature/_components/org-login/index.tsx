import InputBox from '@/components/inputBox';
import { OrgLoginCss } from './indexCss';
import { SubmitButton } from '@/components/button';

const OrgLogin = () => {
  return (
    <OrgLoginCss>
      <div className="inputWrap">
        <i className="label">아이디</i>
        <InputBox
          colortype={0}
          width="100%"
          height="60px"
          placeholder="아이디를 입력해주세요."
          getInputText={(t) => console.log(t)}
        />
        <i className="label">비밀번호</i>
        <InputBox
          colortype={0}
          width="100%"
          height="60px"
          textType="password"
          placeholder="비밀번호를 입력해주세요."
          getInputText={(t) => console.log(t)}
        />
      </div>
      <div className="btnWrap">
        <SubmitButton label="계정 찾기" width="49%" height="55px" />
        <SubmitButton label="로그인" width="49%" height="55px" />
      </div>
      <button className="firstVisitBtn">첫방문이신가요?</button>
    </OrgLoginCss>
  );
};
export default OrgLogin;
