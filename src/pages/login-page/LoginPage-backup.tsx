// import { useState } from 'react';

// import { Wrapper } from './LoginPageCss';
// import TabButtonGroup from '@/components/tab-button';
// import OrgLogin from '@/features/login-feature/_components/org-login';
// import PersonLogin from '@/features/login-feature/_components/person-login';

// export default function LoginPage() {
//   const [isOrg, setIsOrg] = useState<boolean>(false);
//   const onTabChange = (tab: string) => {
//     if (tab === '기관') setIsOrg(true);
//     else setIsOrg(false);
//   };

//   return (
//     <Wrapper>
//       <div className="innerWrap">
//         <div className="tabWrap">
//           <TabButtonGroup
//             tabs={[{ label: '봉사자' }, { label: '기관' }]}
//             onTabChange={onTabChange}
//             width="85px"
//             height="30px"
//             borderRadius="30px"
//             fontSize="14px"
//           />
//         </div>

//         <i className="title">손모아 로그인</i>

//         {isOrg ? <OrgLogin /> : <PersonLogin />}
//       </div>
//     </Wrapper>
//   );
// }
