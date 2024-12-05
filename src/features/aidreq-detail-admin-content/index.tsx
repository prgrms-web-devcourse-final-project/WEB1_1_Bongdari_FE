import TextContent from './_components/text-content';
import Title from './_components/title';

interface AidRqDetailAdminContentProps {
  recruitDetailData: {
    title: string;
    content: string;
    updated_at: string;
    volunteer_category: string;
    recruit_status: string;
  };
}
const AidRqDetailAdminContent = ({ recruitDetailData }: AidRqDetailAdminContentProps) => {
  return (
    <>
      <Title
        title={recruitDetailData.title}
        updateAt={recruitDetailData.updated_at}
        category={recruitDetailData.volunteer_category}
        status={recruitDetailData.recruit_status}
      />
      <TextContent content={recruitDetailData.content} />
    </>
  );
};

export default AidRqDetailAdminContent;
