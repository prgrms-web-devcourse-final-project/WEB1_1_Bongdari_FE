import { TitleWithPagenationCss } from './indexCss';

interface TitleWithPagenationProps {
  title: string;
  totPage: number;
  currPage: number;
  setCurrPage: (page: number) => void;
}

const TitleWithPagenation: React.FC<TitleWithPagenationProps> = ({ title, totPage, currPage, setCurrPage }) => {
  const onClickPrevPage = () => {
    if (currPage === 1) return;
    setCurrPage(currPage - 1);
  };

  const onClickNextPage = () => {
    if (currPage === totPage) return;
    setCurrPage(currPage + 1);
  };
  return (
    <TitleWithPagenationCss>
      <i className="title">{title}</i>
      <div className="pagenationWrap">
        <i className={`pageBtn ${currPage === 1 ? 'disabled' : ''}`} onClick={onClickPrevPage}>
          {'<'}
        </i>
        <i className={`pages ${totPage === 1 ? 'disabled' : ''}`}>
          {currPage} / {totPage}
        </i>
        <i className={`pageBtn ${currPage === totPage ? 'disabled' : ''}`} onClick={onClickNextPage}>
          {'>'}
        </i>
      </div>
    </TitleWithPagenationCss>
  );
};
export default TitleWithPagenation;
