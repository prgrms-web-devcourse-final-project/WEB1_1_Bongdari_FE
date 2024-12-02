import { WriterProfileBoxCss } from './WriterProfileBoxCss';
import { SubmitButton } from '@/components/button';

const WriterProfileBox = ({ writer_id, img_url }: { writer_id: string; img_url: string }) => {
  return (
    <WriterProfileBoxCss>
      <div className="infoWrap">
        <img className="profileImg" src={img_url} />
        <i className="nickname">{writer_id}</i>
        <img className="tier" src="/assets/imgs/mitten-none.svg" />
      </div>
      <SubmitButton label="프로필 확인하기" variant="enabledOne" />
    </WriterProfileBoxCss>
  );
};
export default WriterProfileBox;
