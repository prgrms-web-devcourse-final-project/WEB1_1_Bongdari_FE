import { useState } from 'react';

import { OrgLoginCss } from './indexCss';
import { SubmitButton } from '@/components/button';
import InputBox from '@/components/inputBox';

const OrgLogin = () => {
  const [id, setId] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const onClickFindAcount = () => {
    console.log('계정찾기 페이지로 이동');
  };
  const onClickLogin = () => {
    console.log(id, pwd, '로그인시도');
  };
  const onClickFirstVisit = () => {
    console.log('기업 첫 방문 페이지로 이동');
  };

  return (
    <OrgLoginCss>
      <div className="inputWrap">
        <i className="label">아이디</i>
        <InputBox
          colortype={0}
          width="100%"
          height="60px"
          placeholder="아이디를 입력해주세요."
          getInputText={(txt) => setId(txt)}
        />
        <i className="label">비밀번호</i>
        <InputBox
          colortype={0}
          width="100%"
          height="60px"
          textType="password"
          placeholder="비밀번호를 입력해주세요."
          getInputText={(txt) => setPwd(txt)}
        />
      </div>
      <div className="btnWrap">
        <SubmitButton label="계정 찾기" width="49%" height="55px" onClick={onClickFindAcount} />
        <SubmitButton label="로그인" width="49%" height="55px" onClick={onClickLogin} />
      </div>
      <button className="firstVisitBtn" onClick={onClickFirstVisit}>
        첫방문이신가요?
      </button>
    </OrgLoginCss>
  );
};
export default OrgLogin;
