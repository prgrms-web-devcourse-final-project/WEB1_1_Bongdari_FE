import { useState } from 'react';
import InputBox from '@/components/inputBox';
import {
  DuplicateCheck,
  IDWrapper,
  SignupButton,
  SignupForm,
  TabButton,
  TabWrapper,
  ValidationMessage,
  Wrapper
} from './indexCss';
import { duplicateCheck } from '@/store/queries/signup-query/duplicateCheck';
import { useSignup } from '@/store/queries/signup-query/useSignUp';

const SignupPage = () => {
  const [activeTab, setActiveTab] = useState('봉사자');
  const [idCheck, setIdCheck] = useState<'success' | 'error' | null>(null);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');

  const signupMutation = useSignup();

  const handleSignup = () => {
    if (!id) {
      alert('아이디를 입력해주세요.');
      return;
    }

    if (idCheck !== 'success') {
      alert('아이디 중복 확인이 필요합니다.');
      return;
    }

    if (!pw) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    if (pw !== pwCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const userRole: 'VOLUNTEER' | 'CENTER' = activeTab === '봉사자' ? 'VOLUNTEER' : 'CENTER';

    const signupData = {
      account_id: id,
      account_password: pw,
      user_role: userRole
    };

    signupMutation.mutate(signupData);
  };

  return (
    <Wrapper>
      <i className="title">손모아 회원가입</i>
      <SignupForm onSubmit={() => console.log('회원가입폼 제출')}>
        <IDWrapper>
          <div>
            <label htmlFor="idInput">아이디</label>
            <InputBox
              colortype="white"
              textType="text"
              placeholder="아이디를 입력해주세요."
              getInputText={(inputText) => setId(inputText)}
              disabled={idCheck === 'success'}
            />
          </div>
          <DuplicateCheck
            label="중복확인"
            type="white"
            onClick={() => {
              duplicateCheck(setIdCheck, id);
            }}
          />
        </IDWrapper>
        {id &&
          (idCheck === 'success' ? (
            <ValidationMessage $isSuccess>사용 가능한 아이디입니다.</ValidationMessage>
          ) : idCheck === 'error' ? (
            <ValidationMessage>이미 사용 중인 아이디입니다.</ValidationMessage>
          ) : (
            <ValidationMessage>TODO: 백엔드에서 정해준 에러 메세지 적용</ValidationMessage>
          ))}
        <div>
          <label htmlFor="pwInput">비밀번호</label>
          <InputBox
            colortype="white"
            textType="password"
            placeholder="비밀번호를 입력해주세요."
            getInputText={(inputText) => setPw(inputText)}
          />
          {/* TODO: 비번 유효성 검사 일치 논리 연산자 추가해야함 */}
          {/* {pw && <ValidationMessage>TODO: 백엔드에서 정해준 에러메세지 적용</ValidationMessage>} */}
        </div>
        <div>
          <label htmlFor="pw2Input">비밀번호 확인</label>
          <InputBox
            colortype="white"
            textType="password"
            placeholder="비밀번호를 다시 입력해주세요."
            getInputText={(inputText) => setPwCheck(inputText)}
          />
          {pw !== pwCheck && pwCheck && <ValidationMessage>비밀번호가 일치하지 않습니다.</ValidationMessage>}
          {pw === pwCheck && pwCheck && <ValidationMessage $isSuccess>비밀번호가 일치합니다.</ValidationMessage>}
        </div>
        <div>
          <p>봉사자/기관 설정</p>
          <TabWrapper>
            <TabButton
              label="봉사자"
              type="white"
              isActive={activeTab === '봉사자'}
              onClick={() => setActiveTab('봉사자')}
            />
            <TabButton label="기관" type="white" isActive={activeTab === '기관'} onClick={() => setActiveTab('기관')} />
          </TabWrapper>
        </div>
      </SignupForm>

      <SignupButton label="회원가입" type="blue" buttonType="submit" onClick={handleSignup} />
    </Wrapper>
  );
};
export default SignupPage;
