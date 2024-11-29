import { SectionTitleCss } from './indexCss';

interface SectionTitleProps {
  title: string;
  totPage: number;
  currPage: number;
  setCurrPage: (page: number) => void;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, totPage, currPage, setCurrPage }) => {
  const onClickPrevPage = () => {
    if (currPage === 1) return;
    setCurrPage(currPage - 1);
  };

  const onClickNextPage = () => {
    if (currPage === totPage) return;
    setCurrPage(currPage + 1);
  };
  return (
    <SectionTitleCss>
      <i className="title">{title}</i>
      <div className="pagenationWrap">
        <i className={`pageBtn ${currPage === 1 ? 'disabled' : ''}`} onClick={onClickPrevPage}>
          {'<'}
        </i>
        <i className="pages">
          {currPage} / {totPage}
        </i>
        <i className={`pageBtn ${currPage === totPage ? 'disabled' : ''}`} onClick={onClickNextPage}>
          {'>'}
        </i>
      </div>
    </SectionTitleCss>
  );
};
export default SectionTitle;
