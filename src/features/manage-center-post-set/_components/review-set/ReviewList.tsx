// import Select from '@/components/select';
// import { Author, ItemTitle, ListItem, ReviewListCss, ReviewSetTitle, TitleContainer, Wrapper } from './indexCss';
// import { useState } from 'react';
// import ReviewReadModal from '../../../review-read-modal';
// import { reviewType } from '@/shared/types/person-profile/personProfile';

// // 임시 옵션 설정
// const dataOption = ['가', '나', '다'];

// const ReviewList = ({ data }: { data: reviewType[] }) => {
//   const [, setSelectedOption] = useState('');
//   const [openReviewModal, setOpenReviewModal] = useState(false);

//   const handleSelectedOption = (selectOption: string) => {
//     setSelectedOption(selectOption);
//   };

//   const handleReviewModal = () => {
//     setOpenReviewModal(!openReviewModal);
//     console.log('클릭');
//   };

//   return (
//     <>
//       <Wrapper>
//         <TitleContainer>
//           <ReviewSetTitle>기관 리뷰</ReviewSetTitle>
//           <Select text="활동 유형" data={dataOption} getSelectedOption={handleSelectedOption} />
//         </TitleContainer>
//         <ReviewListCss>
//           {data.map((v, i) => (
//             <ListItem key={i}>
//               <ItemTitle onClick={handleReviewModal}>{v.title}</ItemTitle>
//               <Author>{v.writer}</Author>
//             </ListItem>
//           ))}
//         </ReviewListCss>
//       </Wrapper>
//       {openReviewModal && <ReviewReadModal handleReviewModal={handleReviewModal} />}
//     </>
//   );
// };

// export default ReviewList;
