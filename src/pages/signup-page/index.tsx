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

const SignupPage = () => {
  const [activeTab, setActiveTab] = useState('봉사자');
  const [idCheck, setIdCheck] = useState<'success' | 'error' | null>(null);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');

  // TODO: API 생성되면 id 받아서 유효성 검사 거치는 로직 추가해주세요.

  return (
    <Wrapper>
      <i className="title">손모아 회원가입</i>
      <SignupForm onSubmit={() => console.log('회원가입폼 제출')}>
        <IDWrapper>
          <div>
            <label htmlFor="idInput">아이디</label>
            <InputBox colortype="white" textType="text" placeholder="아이디를 입력해주세요." />
          </div>
          <DuplicateCheck label="중복확인" type="white" />
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
          <InputBox colortype="white" textType="password" placeholder="비밀번호를 입력해주세요." />
          {/* TODO: 비번 유효성 검사 일치 논리 연산자 추가해야함 */}
          {pw && <ValidationMessage>TODO: 백엔드에서 정해준 에러메세지 적용</ValidationMessage>}
        </div>
        <div>
          <label htmlFor="pw2Input">비밀번호 확인</label>
          <InputBox colortype="white" textType="password" placeholder="비밀번호를 다시 입력해주세요." />
          {/* TODO: 후에 비밀번호 일치 여부 추가하는 논리 연산자 추가해야함함 */}
          {confirmPw && <ValidationMessage>비밀번호가 일치하지 않습니다.</ValidationMessage>}
          {confirmPw && <ValidationMessage $isSuccess>비밀번호가 일치합니다.</ValidationMessage>}
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

      <SignupButton
        label="회원가입"
        type="blue"
        buttonType="submit"
        onClick={() => console.log('회원가입 버튼 클릭')}
      />
    </Wrapper>
  );
};

export default SignupPage;
