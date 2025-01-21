import { TitleWithPagenationCss } from './indexCss';
import SvgIcon from '@mui/material/SvgIcon';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
        <SvgIcon
          component={ChevronLeftIcon}
          className="svgIcon"
          fontSize="medium"
          color={`${currPage === 1 ? 'disabled' : 'inherit'}`}
          onClick={onClickPrevPage}
        />
        <i className={`pages ${totPage === 1 ? 'disabled' : ''}`}>
          {currPage} / {totPage}
        </i>
        <SvgIcon
          component={ChevronRightIcon}
          className="svgIcon"
          fontSize="medium"
          color={`${currPage === totPage ? 'disabled' : 'inherit'}`}
          onClick={onClickNextPage}
        />
      </div>
    </TitleWithPagenationCss>
  );
};
export default TitleWithPagenation;
