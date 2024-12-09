# 🦺 구호활동 연결 플랫폼 손모아

재해나 지원이 필요한 현장에서 도움을 원하는 단체와 자원봉사자를 연결해주는 중계 플랫폼입니다.

배포 URL: https://www.somemore.site/ <br />
노션 링크: https://www.notion.so/prgrms/Team08-81045d7e1f3e48ccbb9b215a663b97c6 <br />
프론트 레포지토리: https://github.com/prgrms-web-devcourse-final-project/WEB1_1_Bongdari_FE <br />
백엔드 레포지토리: https://github.com/prgrms-web-devcourse-final-project/WEB1_1_Bongdari_BE <br />

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

### Backend

|                Backend                 |                Backend                 |                Backend                 |                Backend                 |
| :-----------------------------------: | :------------------------------------: | :------------------------------------: | :------------------------------------: |
|              **조재중(팀장)**               |              **윤서진(PM)**               |              **양아영**               |              **이범수**                |
| [<img src="https://github.com/m-a-king.png" width="300"> <br/> @m-a-king](https://github.com/m-a-king) | [<img src="https://github.com/7zrv.png" width="300"> <br/> @7zrv](https://github.com/7zrv) | [<img src="https://github.com/ayoung-dev.png" width="300"> <br/> @ayoung-dev](https://github.com/ayoung-dev) | [<img src="https://github.com/leebs0521.png" width="300"> <br/> @leebs0521](https://github.com/leebs0521) |

### Frontend

|                Frontend                |                Frontend                |                Frontend                |
| :-----------------------------------: | :------------------------------------: | :------------------------------------: |
|              **홍유진(팀장)**               |              **김민준**               |              **김주영**               |
| [<img src="https://github.com/youjin-hong.png" width="300"> <br/> @youjin-hong](https://github.com/youjin-hong) | [<img src="https://github.com/minjoon97.png" width="300"> <br/> @minjoon97](https://github.com/minjoon97) | [<img src="https://github.com/djm06294.png" width="300"> <br/> @djm06294](https://github.com/djm06294) |

## 💡주요 기능

### ✔️메인 기능

- **기관**은 봉사 활동에 대한 모집글을 등록할 수 있습니다.

<img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png" width="600" />

<br />

- **봉사자**는 기관들이 올린 봉사 활동 모집글들을 전부 볼 수 있고, 원하는 봉사 활동 모집글에 대해 지원할 수 있습니다.

<img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png" width="600" />

<br />

- **기관**은 자신이 올린 봉사 활동에 지원한 봉사자들의 명단을 리스트로 관리하며 지원 수락, 반려할 수 있습니다.

<img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png" width="600" />

<br />

- **기관**은 해당 봉사 활동이 종료된 후, 봉사 활동에 참여한 지원자들에 한하여 봉사 시간을 정산할 수 있습니다. 

<img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png" width="600" />

<br />


### ✔️콘텐츠 기능

- 메인 페이지에는 봉사자들의 프로필에 등록돼있는 봉사 시간을 기준으로 "이 달의 봉사왕" 봉사시간이 많은 봉사자 4명의 랭킹이 매겨집니다.

<img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png" width="600" />

<br />

- 각 봉사자들은 봉사 시간/횟수에 따라 10단계의 티어를 가질 수 있습니다.

<img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png" width="600" />

<br />

- 기관과 봉사자는 모두 커뮤니티를 공유하며, 댓글과 대댓글 기능을 통해 활발한 소통을 할 수 있습니다. 

<img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png" width="600" />

<br />


### ✔️편의 기능

- 기관은 봉사자에게, 봉사자는 기관에게 쪽지를 전달할 수 있습니다. 이를 통해 기관과 봉사자의 소통에 편의를 보장합니다. 

<img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png" width="600" />

<br />

- 기관과 봉사자 모두 쪽지, 리뷰, 봉사 신청 결과 등을 실시간 알림으로 받아볼 수 있습니다. 

<img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png" width="600" />


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
<img src="https://img.shields.io/badge/React_Datepicker-216BA5?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/Lodash-3492FF?style=for-the-badge&logo=lodash&logoColor=white">
<img src="https://img.shields.io/badge/Intersection_Observer-FF4785?style=for-the-badge&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/React_Toastify-FFB4B4?style=for-the-badge&logo=react&logoColor=black">
</div>

### 📌 Backend Tech Stack

#### 🔤 언어
<div style={{display: "flex"}}>
<img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white">
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white">
</div>

#### 🛠 프레임워크
<div style={{display: "flex"}}>
<img src="https://img.shields.io/badge/Spring_Boot_3-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white">
<img src="https://img.shields.io/badge/Spring_Data_JPA-6DB33F?style=for-the-badge&logo=spring&logoColor=white">
<img src="https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=spring-security&logoColor=white">
</div>

#### 💾 데이터베이스
<div style={{display: "flex"}}>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white">
<img src="https://img.shields.io/badge/Elasticsearch-005571?style=for-the-badge&logo=elasticsearch&logoColor=white">
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
  <summary>프론트엔드 디렉토리 구조</summary>
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
<details>
  <summary>백엔드 디렉토리 구조</summary>
  <pre><code>
com.example.develetter
├── global
│   ├── config
│   ├── exception
│   ├── handler
│		├── common
│   └── util
├── center
│   ├── domain
│ 	│   └── entity
│   ├── controller
│   │   ├── query
│   │   └── command
│   ├── service
│   │   ├── query
│   │   └── command
│   ├── dto
│   │   ├── request
│   │   └── response
│   ├── repository
│   │   ├── query
│   │   └── command             
│   └── scheduler
├── volunteer
│   ├── domain
│ 	│   └── entity
│   ├── controller
│   │   ├── query
│   │   └── command
│   ├── service
│   │   ├── query
│   │   └── command
│   ├── dto
│   │   ├── request
│   │   └── response
│   ├── repository
│   │   ├── query
│   │   └── command             
│   └── scheduler
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

## 📆개발 기간

- 기획: 2024.11.12~2024.11.25
- 개발: 2024.11.25~2024.12.9

<br />

## 🛠트러블 슈팅

- TODO: 노션링크 연결 또는 직접 작성

<br />

## 🔧향후 개선 사항

- TODO
- TODO
- TODO

<br />

## 👥팀원 소개 및 느낀점

<details>
  <summary>김민준</summary>
    <div markdown="1">
    <ul>
      <li>작성 예정</li>
      <li></li>
    </ul>
  </div>
</details>
<details>
  <summary>김주영</summary>
    <div markdown="2">
    <ul>
      <li>작성 예정</li>
      <li></li>
    </ul>
  </div>
</details>
<details>
  <summary>홍유진</summary>
    <div markdown="3">
    <ul>
      <li>작성 예정</li>
      <li></li>
    </ul>
  </div>
</details>