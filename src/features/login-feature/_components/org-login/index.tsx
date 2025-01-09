// import { OrgLoginCss } from './indexCss';
// import InputBox from '@/components/inputBox';
// import { useOrgLogin } from './logic/useOrgLogin';
// import Button from '@/components/button';

// const OrgLogin = () => {
//   const { idErr, pwdErr, checkId, checkPwd, onClickFindAcount, onClickLogin, onClickFirstVisit } = useOrgLogin();
//   return (
//     <OrgLoginCss>
//       <div className="inputWrap">
//         <i className="label">아이디</i>

//         <InputBox
//           // inputBox 고쳐주세요!!
//           // height="60px"
//           colortype="white"
//           placeholder="아이디를 입력해주세요."
//           getInputText={checkId} // 필요 없는데 필수props라서 넣어줌
//           setFunc={checkId}
//         />
//         <i className="checkErr">{idErr}</i>
//       </div>
//       <div className="inputWrap">
//         <i className="label">비밀번호</i>
//         <InputBox
//           // inputBox 고쳐주세요!!
//           // height="60px"
//           colortype="white"
//           textType="password"
//           placeholder="비밀번호를 입력해주세요."
//           getInputText={checkPwd} // 필요 없는데 필수props라서 넣어줌
//           setFunc={checkPwd}
//         />
//         <i className="checkErr">{pwdErr}</i>
//       </div>
//       <div className="btnWrap">
//         <button className="findAccountBtn" onClick={onClickFindAcount}>
//           계정 찾기
//         </button>
//         <Button label="로그인" onClick={onClickLogin} />
//       </div>
//       <button className="firstVisitBtn" onClick={onClickFirstVisit}>
//         첫방문이신가요?
//       </button>
//     </OrgLoginCss>
//   );
// };
// export default OrgLogin;
