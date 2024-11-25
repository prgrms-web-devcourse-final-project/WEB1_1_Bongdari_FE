import { Explain, PreferItemContainer, Site, Title, Wrapper } from './indexCss';
import InterestButton from './ui/interest-center';
import PreferItem from './ui/prefer-items';

const InfoContainer = () => {
  return (
    <Wrapper>
      <InterestButton></InterestButton>
      <Title>서울도서관</Title>
      <Site>www.seoullibrary.com</Site>
      <Explain>
        서울도서관에 대한 설명입니다.서울도서관에 대한 설명입니다.서울도서관에 대한 설명입니다. 서울도서관에 대한
        설명입니다.서울도서관에 대한 설명입니다.
      </Explain>
      <PreferItemContainer>
        <p>이러한 지원이 필요해요!</p>
        <PreferItem label="어린이동화 10권"></PreferItem>
        <PreferItem label="어린이동화 10권"></PreferItem>
        <PreferItem label="어린이동화 10권"></PreferItem>
        <PreferItem label="어린이동화 10권"></PreferItem>
        <PreferItem label="어린이동화 10권"></PreferItem>
        <PreferItem label="어린이동화 10권"></PreferItem>
        <PreferItem label="어린이동화 10권"></PreferItem>
      </PreferItemContainer>
    </Wrapper>
  );
};

export default InfoContainer;
