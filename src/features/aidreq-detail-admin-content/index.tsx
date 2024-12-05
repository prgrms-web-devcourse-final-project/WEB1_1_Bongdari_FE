import type { RecruitAPIState } from '@/shared/mapping/aid-recruit-status-mapping';
import TextContent from './_components/text-content';
import Title from './_components/title';

interface AidRqDetailAdminContentProps {
  recruitDetailData: {
    title: string;
    content: string;
    updated_at: string;
    volunteer_category: string;
    recruit_status: string;
    recruitment_count: number;
    admitted: boolean;
  };
}
const AidRqDetailAdminContent = ({ recruitDetailData }: AidRqDetailAdminContentProps) => {
  return (
    <>
      <Title
        title={recruitDetailData.title}
        updateAt={recruitDetailData.updated_at}
        category={recruitDetailData.volunteer_category}
        status={recruitDetailData.recruit_status as RecruitAPIState}
        admitted={recruitDetailData.admitted}
      />
      <TextContent content={recruitDetailData.content} recruitmentCount={recruitDetailData.recruitment_count} />
    </>
  );
};

export default AidRqDetailAdminContent;
