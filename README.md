# 🦺 구호활동 연결 플랫폼 손모아

재해나 지원이 필요한 현장에서 도움을 원하는 단체와 자원봉사자를 연결해주는 중계 플랫폼입니다.

- [봉사자 시연 영상 보기▶️](https://youtu.be/Y_pWZVyEhyI)  
- [기관 시연 영상 보기▶️](https://youtu.be/jq6GtXT8OKU)


## 🎇프로젝트 개요

**손모아**의 목표는 **"사회지원 활동 참여를 쉽게 만들자"** 입니다.<br />

전화, 방문 등 기존의 복잡한 절차의 불편함을 해소해 접근성을 향상 시키기 위해 이 프로젝트를 기획하게 되었습니다.   <br />

도움이 필요하지만 모집 방법이 게시글 등록이 전부였던 기관들에게 봉사자에게 직접 도움을 요청할 수 있게 하여 봉사자와 기관 간의 커뮤니케이션을 활성화할 수 있고, <br />
봉사 시간에 따라 티어를 부여하고 "이 주의 봉사왕" 랭킹과 같은 게이미피케이션(Gamification)을 통해 봉사자들은 성취감을 느낄 수 있습니다.

## 📃목차

- [프로젝트 개요](#프로젝트-개요)
- [프로젝트 구성원](#프로젝트-구성원)
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [폴더 구조](#폴더-구조)
- [설치 및 실행 방법](#설치-및-실행-방법)
- [개발 기간](#개발-기간)
- [트러블 슈팅](#트러블-슈팅)
- [향후 개선 사항](#향후-개선-사항)
- [팀원 소개 및 느낀점](#팀원-소개-및-느낀점)

## 👩🏻‍💻프로젝트 구성원

|                Frontend                |                Frontend                |                Frontend                |
| :-----------------------------------: | :------------------------------------: | :------------------------------------: |
|              **홍유진(팀장)**               |              **김민준**               |              **김주영**               |
| [<img src="https://github.com/youjin-hong.png" width="300"> <br/> @youjin-hong](https://github.com/youjin-hong) | [<img src="https://github.com/minjoon97.png" width="300"> <br/> @minjoon97](https://github.com/minjoon97) | [<img src="https://github.com/djm06294.png" width="300"> <br/> @djm06294](https://github.com/djm06294) |

## 💡주요 기능

### ✔️메인 기능

- **기관**은 봉사 활동에 대한 모집글을 등록할 수 있습니다.

![Image](https://github.com/user-attachments/assets/f15a2000-d148-4422-9461-6f4d95d32c41)
<br />

- **봉사자**는 기관들이 올린 봉사 활동 모집글들을 전부 볼 수 있고, 원하는 봉사 활동 모집글에 대해 지원할 수 있습니다.

![Image](https://github.com/user-attachments/assets/df579161-5a3e-4484-9e27-d70af5d9bb89)

<br />

- **기관**은 자신이 올린 봉사 활동에 지원한 봉사자들의 명단을 리스트로 관리하며 지원 수락, 반려할 수 있습니다.

![Image](https://github.com/user-attachments/assets/d65c20b2-10ab-4df3-8fe6-e8cfb467421a)

<br />

- **기관**은 해당 봉사 활동이 종료된 후, 봉사 활동에 참여한 지원자들에 한하여 봉사 시간을 정산할 수 있습니다. 

![Image](https://github.com/user-attachments/assets/7dfcd0b1-42df-499e-b0f2-4ad07b3ed4f6)

<br />


### ✔️콘텐츠 기능

- 메인 페이지에는 봉사자들의 프로필에 등록돼있는 봉사 시간을 기준으로 "이 달의 봉사왕" 봉사시간이 많은 봉사자 4명의 랭킹이 매겨집니다.

![Image](https://github.com/user-attachments/assets/aa95b166-070a-4c9e-8f61-bdebe06e2197)

<br />

- 각 봉사자들은 봉사 시간/횟수에 따라 10단계의 티어를 가질 수 있습니다.

<img src="https://github.com/user-attachments/assets/d1a71d01-8e5b-4efb-b42e-902469a43054" width="600" />

<br />

- 기관과 봉사자는 모두 커뮤니티를 공유하며, 댓글과 대댓글 기능을 통해 활발한 소통을 할 수 있습니다. 

![Image](https://github.com/user-attachments/assets/577324c4-aa0f-4f20-9dbd-2c7f792e9212)

<br />


### ✔️편의 기능

- 기관은 봉사자에게, 봉사자는 기관에게 쪽지를 전달할 수 있습니다. 이를 통해 기관과 봉사자의 소통에 편의를 보장합니다. 

![Image](https://github.com/user-attachments/assets/0a47f4d2-6033-4121-a1ab-25f40c3cc89b)

<br />

- 기관과 봉사자 모두 쪽지, 리뷰, 봉사 신청 결과 등을 실시간 알림으로 받아볼 수 있습니다. 

![Image](https://github.com/user-attachments/assets/8830f08e-0766-4779-9831-b5996f92a149)


<br />

## 🛠기술 스택

### 📌 Frontend Tech Stack


#### 🔤 언어
<div style={{display: "flex"}}>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
</div>

#### 🛠 프레임워크
<div style={{display: "flex"}}>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
</div>

#### 📡 상태 관리 & 데이터 통신
<div style={{display: "flex"}}>
<img src="https://img.shields.io/badge/Zustand-181717?style=for-the-badge&logo=Zustand&logoColor=white">
<img src="https://img.shields.io/badge/React--Query-FF4154?style=for-the-badge&logo=React-Query&logoColor=white">
<img src="https://img.shields.io/badge/MSW-FF6A33?style=for-the-badge&logo=Mock-Service-Worker&logoColor=white">
<img src="https://img.shields.io/badge/SSE-007396?style=for-the-badge&logo=Server-Sent-Events&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
</div>

#### 🔌 외부 라이브러리 & 서비스
<div style={{display: "flex"}}>
<img src="https://img.shields.io/badge/Kakao_Maps-FFCD00?style=for-the-badge&logo=kakao&logoColor=black">
<img src="https://img.shields.io/badge/Naver_OAuth-03C75A?style=for-the-badge&logo=naver&logoColor=white">
<img src="https://img.shields.io/badge/React_Datepicker-216BA5?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/Lodash-3492FF?style=for-the-badge&logo=lodash&logoColor=white">
<img src="https://img.shields.io/badge/Intersection_Observer-FF4785?style=for-the-badge&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/React_Toastify-FFB4B4?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white">
</div>

#### 🚀 배포
<div style={{display: "flex"}}>
<img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white">
<img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
</div>

### 🤝 협업 Tool
<div style={{display: "flex"}}>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white">
<img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">
<img src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=Zoom&logoColor=white">
<img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=black">
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
</div>

<br />

## 📁폴더 구조

<details>
  <summary>프론트엔드 디렉토리 구조 (FSD 패턴 일부 채택)</summary>
<pre><code>
src
├── assets
│   └── images
├── components
│   ├── component1
│   │   ├── logic
│   │   ├── ui
│   │   ├── index.tsx
│   │   └── indexCss.ts
│   └── component2
│       ├── logic
│       ├── ui
│       ├── index.tsx
│       └── indexCss.ts
├── features
│   ├── feature1
│   │   ├── logic
│   │   ├── ui
│   │   ├── index.tsx
│   │   └── indexCss.ts
│   └── feature2
│       ├── logic
│       ├── ui
│       ├── index.tsx
│       └── indexCss.ts
├── api
│   ├── endPoints.ts
│   └── client.ts
├── store
│   ├── queries
│   │   └── login
│   │       └── loginData.ts
│   └── stores
├── styles
│   ├── myreset.css
│   └── global.css
├── shared
│   ├── hooks
│   └── types
├── mocks
├── pages
│   ├── main-page
│   │   ├── index.tsx
│   │   └── indexCss.ts
│   └── login-page
│       ├── index.tsx
│       └── indexCss.ts
└── layout
    ├── header
    └── footer
</code></pre>
</details>

<br />

## 🔄 User Flow

<img src="https://github.com/user-attachments/assets/1f451c01-e042-4392-b830-09e670f9a29a" />

**주요 사용자 흐름**<br />

1. 비로그인 사용자(기관/봉사자 구분 x): 봉사 활동 모집글/커뮤니티/메인페이지 이용 가능
2. 기관: 도움요청글 작성/수정/삭제, 지원자 수락/반려/정산, 커뮤니티 글 작성/삭제/댓글, 쪽지/리뷰, 알림, 마이페이지 이용
3. 봉사자: 도움요청글 조회/지원/지원 철회, 커뮤니티 글 작성/삭제/댓글, 쪽지/리뷰, 알림, 마이페이지 이용

<br />


## 🚀설치 및 실행 방법

### 설치

1. **저장소 복제하기**

```
git clone https://github.com/prgrms-web-devcourse-final-project/WEB1_1_Bongdari_FE.git
```
2. **프론트엔드 종속성 설치**

```
yarn install
```

3. **환경 변수 설정**

- frontend: 백엔드 도메인 주소, 카카오맵 api Javascript key 등록

4. **개발 서버 시작**
```
yarn dev
```

<br />

## 📆프로젝트 기간

- 기획 & 디자인: `2024.11.12 ~ 2024.11.25`
- 개발: `2024.11.25 ~ 2024.12.9`
- 리팩토링 & 디버깅: `2024.12.21 ~ 2025.2.10`

<br />

## 🛠트러블 슈팅

- [트러블슈팅 노션링크🔗](https://lovely-juniper-c4d.notion.site/1a51c6afab8c8063939fd5485ef06e56)

<br />

## 🔧향후 개선 사항

- 텍스트 에디터에 이미지 넣기
- 클린 코드에 대해 고민하고 작성해보기

<br />

## 👥팀원 소개 및 느낀점

<details>
  <summary>김민준</summary>
    <div markdown="1">
    <ul>
      <li>api요청에서의 프론트와 백의 조율사항에 대해 많은 점을 배울 수 있었던 프로젝트 였습니다. SSE, httpOnly토큰, 에러코드 기반 디버깅 등 여러가지 이슈에 따른 커뮤니케이션의 중요성을 다시 한번 느꼈고, 그만큼 경험치도 쌓을 수 있어서 좋았습니다.</li>
      <li>프로젝트를 짧은 기간 안에 마무리 하면서, 사용자 경험 측면에서 어떤 부분이 우선순위에 있는지를 생각해 볼 수 있었던 장점도 있었지만, 그만큼 디버깅이나 최적화 측면에서는 시간이 더 있었으면 어땠을까 하는 아쉬움도 있었습니다.</li>
      <li>기술적인 회고로는, 재사용성과 확장성을 고려한 컴포넌트를 결정하는 부분이 가장 어려웠던 것 같고, 쿠키의 토큰을 관리하는 법과 zustand를 이용한 로그인정보를 저장하되, 새로고침 시 초기화를 막기위한 persist사용하는 법 등이 가장 유용했던 경험이었습니다.</li>
      <li>앞으로 반응형ui구현과 디버깅을 진행할 예정이고, 강사님의 피드백 대로 시맨틱태그와 meta태그를 이용한 SEO최적화 작업도 진행해보면 좋을 것 같습니다.</li>
    </ul>
  </div>
</details>
<details>
  <summary>김주영</summary>
    <div markdown="2">
    <ul>
      <li>발표 준비를 하면서 내가 구현한 부분의 부족한 점들이 많이 보였던 것 같다. 기획할 때 생각해두지 못한 부분들도 있었고, 디버깅이 필요한 부분들도 많았다. 결과적으로 사용자가 사용할 페이지에 필요한 기능이 어떤게 있는지 좀 더 완성본을 생각해보며 구현을 했으면 좋았을 것 같고 또 세세한 것들에 차례로 집중을 하기보다는 사용자가 필수적으로 접하는 기능들부터 구현하는게 맞구나라는 생각도 많이 들었다. 그래도 계층적인? 파일 구조로 기획하고 구현하는 과정이 좋았고 프로젝트를 하나씩 해나갈 때마다 많이 배울 수 밖에 없는 것 같다. 코드 디버깅 및 리팩토링 진행하고 seo도 측정해보고 lighthouse도 사용해보며 테스트해보고 싶다.</li>
    </ul>
  </div>
</details>
<details>
  <summary>홍유진</summary>
    <div markdown="3">
    <ul>
      <li>한 달이라는 기간동안 기획 + 디자인 + 개발까지 팀프로젝트로 하기 위해 일정 관리를 하는 것이 제일 어려웠던 것 같고, 다른 작업도 마찬가지지만 특히 api 연결을 할 때 발생하고 있는 에러에 대해 백엔드에도 상황을 전달하여 어느 부분에서 에러가 발생하고 있는지 공유하는 것이 중요하다고 느꼈다.</li>
      <li>백엔드와 협업을 하며 여러 상황에 대해 같이 고민하는 시간이 많았는데, 그때마다 어떤 상황에 어떤 걸 고려해야 하는지 감이 잘 오지 않아 의견을 잘 내지 못한 게 아쉬웠다. 그래도 다른 팀원들이 이야기하는 것을 보고, 직접 개발을 진행해보며 어떤 걸 미리 고려해야 하는지, 특정 상황에서 어떤 흐름을 이해해야 하는지 많이 배우게 된 것 같아 좋았다.</li>
      <li>팀에서 테스트를 할 땐 발견하지 못했던 사항들이 발표 피드백 통해 받을 수 있어서 피드백을 반영해서 예외 처리를 하면 더 완성도 있는 결과물을 낼 수 있을 것 같다.</li>
      <li>우선 순위를 정한 뒤 개발을 시작했는데, 로그인을 해야만 개발을 할 수 있는 것들이 많아 개발이 지체가 되어서 앞으로는 로그인이 필요한 서비스에서는 로그인을 1순위로 두어야 할 것 같다고 느꼈고 이 부분은 개발자와 사용자 입장 모두 일맥상통한다고 생각이 들었다.</li>
      <li>이번에 Typescript, react query를 처음 써서 개발을 해보았다. typescript는 단순히 type 지정만 하는 줄만 알았는데 api 요청/응답 형식, 그리고 유니온 타입, 타입 가드 등을 이용해 로직을 작성하여 좀 더 직관적이고 명확한 코드를 짤 수 있다는 것과, react query도 api fetching할 때, 캐싱이나 Optimistic update, 에러나 로딩 상태 등을 손쉽게 관리할 수 있다는 걸 알게 되었다. 이번에 사용 방법을 익혔으니 앞으로는 왜 쓰는지, 언제 적용하면 좋을 지에 대해 고민하는 시간을 가지면 좋을 것 같다.</li>
      <li>컴포넌트부터 분리를 해서 재사용성을 최대한 고민해보았는데, 컴포넌트 단에서 너무 많은 props 지정과 로직을 작성해 쓸 수 있는 상황이 제한돼 예상보다는 재사용성을 높이지 못해서 아쉬웠다.<br />이번 프로젝트는 컴포넌트가 제일 작은 단위였는데, 제일 작은 단위에서는 기본적인 껍데기 ui만 만드는 것이 재사용성을 높일 수 있다는 것을 느끼게 되었다.<br />이번에 컴포넌트를 분리하는 법에 대해 알게 되었으니 다음에는 atomic design을 도입해 개발을 진행해보고 싶다.</li>
<li>앞으로는 기획했던 기능들을 모두 개발하고, 어제 피드백을 받았던 모바일 적응형/반응형 ui를 적용하고, 강사님/FT님/멘토님께서 말씀하신 무한스크롤 시에 throttle이 뭔지 공부하고 폰트 lazing, seo 최적화에 대해 고민하고  적용해보면 좋을 것 같다.</li>
    </ul>
  </div>
</details>